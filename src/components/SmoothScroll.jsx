import React, { createContext, useContext, useEffect, useRef, useState, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

const SmoothScrollContext = createContext({
  scrollTo: () => {},
  scrollY: 0,
  progress: 0,
  direction: 0,
});

export const useSmoothScroll = () => useContext(SmoothScrollContext);

/**
 * Enterprise kinetic smooth scrolling provider.
 * Features:
 * - Buttery-smooth lerp momentum physics for mouse wheel and keyboard.
 * - Respects native touch momentum on mobile / touchscreens.
 * - Respects 'prefers-reduced-motion: reduce' for accessibility.
 * - Yields to nested scrollable containers (code blocks, modal dialogs, chat widget, scroll tables).
 * - Smooth anchor navigation with header offset (72px).
 * - Synchronizes with React Router route changes.
 */
export function SmoothScrollProvider({
  children,
  lerp = 0.088,
  headerOffset = 74,
}) {
  const location = useLocation();
  const navigate = useNavigate();

  const [progress, setProgress] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const currentY = useRef(0);
  const targetY = useRef(0);
  const isAnimating = useRef(false);
  const rafId = useRef(null);
  const isTouchDevice = useRef(false);
  const prefersReducedMotion = useRef(false);

  // Check if target is inside an element that has its own scrollable overflow
  const isInsideScrollableContainer = useCallback((el, deltaY) => {
    let current = el;
    while (current && current !== document.body && current !== document.documentElement) {
      // Ignore non-element nodes
      if (current.nodeType === 1) {
        const style = window.getComputedStyle(current);
        const overflowY = style.overflowY;
        if (overflowY === 'auto' || overflowY === 'scroll') {
          const canScrollDown = deltaY > 0 && current.scrollTop + current.clientHeight < current.scrollHeight - 2;
          const canScrollUp = deltaY < 0 && current.scrollTop > 2;
          if (canScrollDown || canScrollUp) {
            return true;
          }
        }
      }
      current = current.parentElement;
    }
    return false;
  }, []);

  // RAF loop for buttery interpolation
  const startRaf = useCallback(() => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    const tick = () => {
      const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      targetY.current = Math.min(Math.max(0, targetY.current), maxScroll);

      const diff = targetY.current - currentY.current;

      if (Math.abs(diff) > 0.45) {
        currentY.current += diff * lerp;
        window.scrollTo({ top: currentY.current, behavior: 'instant' });
        rafId.current = requestAnimationFrame(tick);
      } else {
        currentY.current = targetY.current;
        window.scrollTo({ top: currentY.current, behavior: 'instant' });
        isAnimating.current = false;
        rafId.current = null;
      }

      // Update state for progress indicator
      const currentScroll = currentY.current;
      setScrollY(currentScroll);
      setShowBackToTop(currentScroll > 420);
      if (maxScroll > 0) {
        setProgress(Math.min(1, Math.max(0, currentScroll / maxScroll)));
      }
    };

    rafId.current = requestAnimationFrame(tick);
  }, [lerp]);

  // Programmatic smooth scroll function
  const scrollTo = useCallback((target, options = {}) => {
    const { offset = -headerOffset, immediate = false } = options;
    let destY = 0;

    if (typeof target === 'number') {
      destY = target + (offset !== -headerOffset ? offset : 0);
    } else if (typeof target === 'string') {
      const cleanSelector = target.startsWith('#') ? target : `#${target}`;
      let el = null;
      try {
        el = document.querySelector(cleanSelector);
      } catch {
        el = document.getElementById(cleanSelector.replace('#', ''));
      }
      if (el) {
        const rect = el.getBoundingClientRect();
        destY = rect.top + window.scrollY + offset;
      } else {
        return;
      }
    } else if (target instanceof HTMLElement) {
      const rect = target.getBoundingClientRect();
      destY = rect.top + window.scrollY + offset;
    }

    const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    destY = Math.min(Math.max(0, destY), maxScroll);

    if (immediate || prefersReducedMotion.current) {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      isAnimating.current = false;
      targetY.current = destY;
      currentY.current = destY;
      window.scrollTo({ top: destY, behavior: 'instant' });
      setScrollY(destY);
      if (maxScroll > 0) setProgress(destY / maxScroll);
    } else {
      targetY.current = destY;
      startRaf();
    }
  }, [headerOffset, startRaf]);

  // Setup device checks and event listeners
  useEffect(() => {
    // Detect mobile touch devices
    isTouchDevice.current = (
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia('(pointer: coarse)').matches
    );

    // Detect prefers-reduced-motion
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    prefersReducedMotion.current = motionQuery.matches;
    const handleMotionChange = (e) => {
      prefersReducedMotion.current = e.matches;
    };
    motionQuery.addEventListener?.('change', handleMotionChange);

    // Initialize positions
    currentY.current = window.scrollY;
    targetY.current = window.scrollY;

    // Apply class to documentElement to avoid CSS smooth-scroll fighting
    if (!isTouchDevice.current && !prefersReducedMotion.current) {
      document.documentElement.classList.add('has-smooth-scroll');
    }

    // Wheel listener
    const handleWheel = (e) => {
      if (isTouchDevice.current || prefersReducedMotion.current) return;

      // If body scroll is locked (e.g. modal open, mobile menu open)
      if (document.body.style.overflow === 'hidden') return;

      // If user is scrolling an internal element (e.g. table, modal, dropdown)
      if (isInsideScrollableContainer(e.target, e.deltaY)) return;

      e.preventDefault();

      let delta = e.deltaY;
      if (e.deltaMode === 1) {
        // Line mode (e.g. Firefox)
        delta *= 36;
      } else if (e.deltaMode === 2) {
        // Page mode
        delta *= window.innerHeight;
      }

      // Trackpad vs discrete wheel step smoothing
      // On macOS trackpad, delta is small and continuous; on mouse wheel it is ~100px.
      const isTrackpad = Math.abs(delta) < 40 && !Number.isInteger(delta);
      const multiplier = isTrackpad ? 1.05 : 1.15;

      const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      targetY.current = Math.min(Math.max(0, targetY.current + (delta * multiplier)), maxScroll);

      startRaf();
    };

    // Keyboard navigation listener
    const handleKeyDown = (e) => {
      if (isTouchDevice.current || prefersReducedMotion.current) return;
      if (document.body.style.overflow === 'hidden') return;

      const activeTag = document.activeElement?.tagName?.toLowerCase();
      if (activeTag === 'input' || activeTag === 'textarea' || activeTag === 'select' || document.activeElement?.isContentEditable) {
        return;
      }

      const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      let handled = false;

      switch (e.key) {
        case 'ArrowDown':
          targetY.current = Math.min(maxScroll, targetY.current + 110);
          handled = true;
          break;
        case 'ArrowUp':
          targetY.current = Math.max(0, targetY.current - 110);
          handled = true;
          break;
        case 'PageDown':
          targetY.current = Math.min(maxScroll, targetY.current + window.innerHeight * 0.85);
          handled = true;
          break;
        case 'PageUp':
          targetY.current = Math.max(0, targetY.current - window.innerHeight * 0.85);
          handled = true;
          break;
        case 'Space':
          if (e.shiftKey) {
            targetY.current = Math.max(0, targetY.current - window.innerHeight * 0.85);
          } else {
            targetY.current = Math.min(maxScroll, targetY.current + window.innerHeight * 0.85);
          }
          handled = true;
          break;
        case 'Home':
          targetY.current = 0;
          handled = true;
          break;
        case 'End':
          targetY.current = maxScroll;
          handled = true;
          break;
        default:
          break;
      }

      if (handled) {
        e.preventDefault();
        startRaf();
      }
    };

    // Sync with native scroll (e.g., scrollbar dragging, touch scroll)
    const handleScroll = () => {
      if (!isAnimating.current) {
        currentY.current = window.scrollY;
        targetY.current = window.scrollY;
        setScrollY(window.scrollY);
        setShowBackToTop(window.scrollY > 420);
        const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
        if (maxScroll > 0) {
          setProgress(Math.min(1, Math.max(0, window.scrollY / maxScroll)));
        }
      }
    };

    // Global anchor click interception
    const handleClick = (e) => {
      const anchor = e.target.closest('a');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (!href) return;

      // In-page hash: href="#features" or href="/current-page#features"
      const isInternalHash = href.startsWith('#');
      const isSamePathHash = href.includes('#') && (
        href.startsWith(window.location.pathname + '#') ||
        href.startsWith('/' + window.location.pathname.replace(/^\//, '') + '#')
      );

      if (isInternalHash || isSamePathHash) {
        const hash = href.includes('#') ? '#' + href.split('#')[1] : href;
        if (hash && hash !== '#' && hash !== '#top') {
          const targetEl = document.querySelector(hash);
          if (targetEl) {
            e.preventDefault();
            scrollTo(targetEl, { offset: -headerOffset });
            window.history.pushState(null, '', hash);
          }
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown, { passive: false });
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClick);
      motionQuery.removeEventListener?.('change', handleMotionChange);
      document.documentElement.classList.remove('has-smooth-scroll');
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [headerOffset, isInsideScrollableContainer, scrollTo, startRaf]);

  // Handle route & hash changes
  useEffect(() => {
    if (location.hash) {
      // Give DOM time to render route content
      const timer = setTimeout(() => {
        const targetEl = document.querySelector(location.hash);
        if (targetEl) {
          scrollTo(targetEl, { offset: -headerOffset });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      // Instantly reset to top on normal route transition
      if (rafId.current) cancelAnimationFrame(rafId.current);
      isAnimating.current = false;
      targetY.current = 0;
      currentY.current = 0;
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      setScrollY(0);
      setProgress(0);
      setShowBackToTop(false);
    }
  }, [location.pathname, location.hash, headerOffset, scrollTo]);

  return (
    <SmoothScrollContext.Provider value={{ scrollTo, scrollY, progress }}>
      {/* Sleek Enterprise Scroll Progress Indicator */}
      <div
        className="wl-scroll-progress-bar"
        style={{
          transform: `scaleX(${progress})`,
          transformOrigin: '0% 50%'
        }}
        aria-hidden="true"
      />

      {children}

      {/* Floating Smooth Scroll to Top Button */}
      <button
        onClick={() => scrollTo(0, { offset: 0 })}
        className={`wl-scroll-to-top-btn ${showBackToTop ? 'is-visible' : ''}`}
        aria-label="Scroll back to top"
      >
        <ArrowUp size={16} />
      </button>
    </SmoothScrollContext.Provider>
  );
}
