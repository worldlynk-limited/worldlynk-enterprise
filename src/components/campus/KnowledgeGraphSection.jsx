import React, { useState, useEffect, useRef } from 'react';
import './campus.css';

const KG_DATA = [
  {
    name: 'Studies',
    color: '#60a5fa',
    src: 'SITS:Vision',
    note: 'Her programme, modules, marks and the tutor who knows her.',
    children: [
      { l: 'MSc Data Science', src: 'SITS:Vision', note: 'Programme and year of study' },
      { l: 'CS-5100', src: 'SITS:Vision', note: 'The module she finds hardest' },
      { l: '74% average', src: 'SITS:Vision', note: 'On track for a distinction' },
      { l: 'Dr Jenkins', src: 'Staff directory', note: 'Her personal tutor' }
    ]
  },
  {
    name: 'Attendance',
    color: '#38bdf8',
    src: 'QR check-in · Moodle',
    note: 'Where she has been, and where she has gone quiet.',
    children: [
      { l: '98% check-ins', src: 'QR check-in', note: 'Almost never misses' },
      { l: 'Missed lecture ×2', src: 'QR check-in', note: 'Both on Mondays, after late shifts' },
      { l: 'Makeup lab Fri', src: 'Compass', note: 'Approved by her tutor' },
      { l: 'Moodle quiet 4 days', src: 'Moodle', note: 'An early sign worth a gentle check-in' }
    ]
  },
  {
    name: 'Visa',
    color: '#ff8a3d',
    src: 'Compliance records',
    note: 'What she must protect to stay in the country.',
    children: [
      { l: 'Student visa', src: 'Compliance', note: 'Valid for her full course' },
      { l: 'CAS on file', src: 'SITS:Vision', note: 'Evidence attached and approved' },
      { l: 'Work 16h of 20h', src: 'Shift log', note: 'Four hours of headroom this week' }
    ]
  },
  {
    name: 'Home',
    color: '#34d399',
    src: 'Student app · Stripe',
    note: 'Where she lives and who she rents from.',
    children: [
      { l: 'Room in halls', src: 'Student app', note: 'Booked before she flew' },
      { l: 'Deposit in escrow', src: 'Stripe', note: 'Protected until move-out' },
      { l: 'Landlord thread', src: 'WhatsApp', note: 'One repair open, being handled' }
    ]
  },
  {
    name: 'Money',
    color: '#fbbf24',
    src: 'Finance · Flywire',
    note: 'What she has paid and what is coming up.',
    children: [
      { l: 'Tuition paid', src: 'Flywire', note: 'Matched to her account' },
      { l: 'Payment plan', src: 'Finance', note: 'Next instalment in January' }
    ]
  },
  {
    name: 'Life',
    color: '#c084fc',
    src: 'Student app',
    note: 'The things that make her want to stay.',
    children: [
      { l: 'AI Society', src: 'Events', note: 'Joined in week two' },
      { l: 'Mentor: Priya', src: 'Mentorship', note: 'Second-year on the same course' },
      { l: 'Careers evening', src: 'Events', note: 'Booked for Thursday' }
    ]
  },
  {
    name: 'Wellbeing',
    color: '#f472b6',
    src: 'Student services',
    note: 'Seen only by the people whose job it is to help.',
    children: [
      { l: 'Asked for help once', src: 'Student services', note: 'Routed to the right person, with context' },
      { l: 'Check-in due', src: 'Compass', note: 'Drafted for a person to send' }
    ]
  },
  {
    name: 'AI agents',
    color: '#ffffff',
    src: 'WorldLynk',
    note: 'The agents reading this record today, each with a person signing off.',
    children: [
      { l: 'Attendance Agent', src: 'WorldLynk', note: 'Drafted the makeup slot', link: 1 },
      { l: 'Work-Hours Agent', src: 'WorldLynk', note: 'Watching her weekly limit', link: 2 },
      { l: 'Retention Agent', src: 'WorldLynk', note: 'Joined the dots between Mondays and shifts', link: 0 }
    ]
  }
];

export default function KnowledgeGraphSection() {
  const [selectedCat, setSelectedCat] = useState(-1);
  const [activeInfo, setActiveInfo] = useState({
    title: 'Maya Chen',
    color: '#ffffff',
    note: "Master's student. A long way from home. Known by name.",
    src: 'One record'
  });

  const canvasRef = useRef(null);
  const graphStateRef = useRef({
    ry: 0.5,
    rx: -0.28,
    drag: null,
    hover: -1,
    focus: null,
    t: 0
  });

  // Keep focus in sync with selected category
  useEffect(() => {
    if (selectedCat < 0) {
      graphStateRef.current.focus = null;
      setActiveInfo({
        title: 'Maya Chen',
        color: '#ffffff',
        note: "Master's student. A long way from home. Known by name.",
        src: 'One record'
      });
    } else {
      const cat = KG_DATA[selectedCat];
      const f = {};
      f[selectedCat] = 1;
      graphStateRef.current.focus = f;
      setActiveInfo({
        title: cat.name,
        color: cat.color,
        note: cat.note,
        src: cat.src
      });
    }
  }, [selectedCat]);

  // 3D Canvas Rendering
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;
    let W = 0;
    let H = 0;
    let dpr = 1;

    // Build Graph Nodes and Edges
    const N = [];
    const E = [];
    const catIdx = [];

    // Central Node: Maya
    N.push({
      l: 'Maya Chen',
      c: '#ffffff',
      p: [0, 0, 0],
      r: 16,
      k: -1,
      src: 'One record',
      note: "Master's student. A long way from home. Known by name."
    });

    function nrm(v) {
      const l = Math.hypot(v[0], v[1], v[2]) || 1;
      return [v[0] / l, v[1] / l, v[2] / l];
    }
    function crs(a, b) {
      return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
    }

    KG_DATA.forEach((c, i) => {
      const n = KG_DATA.length;
      const y = 1 - 2 * (i + 0.5) / n;
      const rad = Math.sqrt(1 - y * y);
      const th = i * 2.39996;
      const d = [Math.cos(th) * rad, y, Math.sin(th) * rad];
      const ci = N.length;
      catIdx.push(ci);
      N.push({ l: c.name, c: c.color, p: d, r: 10, k: i, cat: 1, src: c.src, note: c.note });
      E.push([0, ci, i]);

      const u = nrm(crs(d, [0.3, 1, 0.2]));
      const v = crs(d, u);
      c.children.forEach((ch, j) => {
        const a = j * (6.283 / c.children.length) + i;
        const s = 0.42;
        N.push({
          l: ch.l,
          c: c.color,
          p: [
            d[0] * 1.62 + (u[0] * Math.cos(a) + v[0] * Math.sin(a)) * s,
            d[1] * 1.62 + (u[1] * Math.cos(a) + v[1] * Math.sin(a)) * s,
            d[2] * 1.62 + (u[2] * Math.cos(a) + v[2] * Math.sin(a)) * s
          ],
          r: 5.5,
          k: i,
          src: ch.src,
          note: ch.note,
          link: ch.link
        });
        E.push([ci, N.length - 1, i]);
      });
    });

    N.forEach((node, i) => {
      if (node.link != null) E.push([i, catIdx[node.link], 7, 1]);
    });

    let P = [];

    function resize() {
      const rect = canvas.getBoundingClientRect();
      if (!rect.width) return;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = rect.width;
      H = rect.height;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function proj() {
      const { ry, rx } = graphStateRef.current;
      const cy = Math.cos(ry);
      const sy = Math.sin(ry);
      const cx = Math.cos(rx);
      const sx = Math.sin(rx);
      const S = Math.min(W, H) * 0.235;

      P = N.map((n) => {
        const x = n.p[0] * cy + n.p[2] * sy;
        let z = -n.p[0] * sy + n.p[2] * cy;
        const y = n.p[1] * cx - z * sx;
        z = n.p[1] * sx + z * cx;
        const f = 4 / (4 - z);
        return { x: W / 2 + x * S * f, y: H / 2 + y * S * f, z, f };
      });
    }

    function hex(c, a) {
      const val = parseInt(c.slice(1), 16);
      return `rgba(${(val >> 16) & 255},${(val >> 8) & 255},${val & 255},${a.toFixed(3)})`;
    }

    function isLit(k) {
      const { focus } = graphStateRef.current;
      return focus == null || k === -1 || focus[k];
    }

    function draw() {
      if (!W) resize();
      if (!W) return;
      proj();
      ctx.clearRect(0, 0, W, H);

      const { hover, t } = graphStateRef.current;

      // Draw Edges
      E.forEach((e) => {
        const a = P[e[0]];
        const b = P[e[1]];
        if (!a || !b) return;
        const on = isLit(N[e[0]].k) && isLit(N[e[1]].k);
        const hot = hover === e[0] || hover === e[1];
        const al = (on ? 0.34 : 0.05) * (0.55 + 0.45 * ((a.z + b.z) / 4 + 0.5));

        ctx.strokeStyle = hot
          ? 'rgba(255,107,0,0.95)'
          : e[3]
          ? `rgba(255,255,255,${al * 0.9})`
          : hex(KG_DATA[e[2]].color, al);

        ctx.lineWidth = hot ? 1.8 : 1;
        if (e[3]) ctx.setLineDash([3, 5]);
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
        ctx.setLineDash([]);

        if (on && !e[3]) {
          const u = (t * 0.35 + e[1] * 0.37) % 1;
          const px = b.x + (a.x - b.x) * u;
          const py = b.y + (a.y - b.y) * u;
          ctx.fillStyle = hex(KG_DATA[e[2]].color, 0.9);
          ctx.beginPath();
          ctx.arc(px, py, 1.7, 0, 6.3);
          ctx.fill();
        }
      });

      // Draw Nodes sorted by depth
      const order = N.map((_, i) => i).sort((a, b) => P[a].z - P[b].z);
      order.forEach((i) => {
        const n = N[i];
        const p = P[i];
        if (!p) return;
        const on = isLit(n.k);
        const r = n.r * p.f * (i === hover ? 1.35 : 1);
        const al = on ? 0.45 + 0.55 * (p.z / 2 + 0.5) : 0.1;

        if (on) {
          const gr = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 3.2);
          gr.addColorStop(0, hex(n.c, 0.35 * al));
          gr.addColorStop(1, hex(n.c, 0));
          ctx.fillStyle = gr;
          ctx.beginPath();
          ctx.arc(p.x, p.y, r * 3.2, 0, 6.3);
          ctx.fill();
        }

        ctx.fillStyle = hex(n.c, Math.min(1, al + 0.15));
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, 6.3);
        ctx.fill();

        // Pulsing ring for central node (Maya)
        if (i === 0) {
          ctx.strokeStyle = 'rgba(255,107,0,0.9)';
          ctx.lineWidth = 2.5;
          ctx.beginPath();
          ctx.arc(p.x, p.y, r + 5 + Math.sin(t * 2) * 1.5, 0, 6.3);
          ctx.stroke();
        }

        // Labels
        if (on && (n.cat || i === 0 || i === hover || p.z > 0.15)) {
          ctx.font = `${n.cat || i === 0 ? '700 ' : '500 '}${Math.round(
            (n.cat || i === 0 ? 13.5 : 11.5) * Math.min(1.15, p.f)
          )}px "Plus Jakarta Sans", system-ui, sans-serif`;
          ctx.textAlign = 'center';
          ctx.fillStyle = `rgba(255,255,255,${i === hover ? 1 : Math.min(1, al + 0.1)})`;
          ctx.fillText(n.l, p.x, p.y - r - 7);
        }
      });
    }

    function pick(mx, my) {
      let best = -1;
      let bd = 24 * 24;
      P.forEach((p, i) => {
        const d = (p.x - mx) * (p.x - mx) + (p.y - my) * (p.y - my);
        if (d < bd && isLit(N[i].k)) {
          bd = d;
          best = i;
        }
      });
      return best;
    }

    const onPointerDown = (e) => {
      graphStateRef.current.drag = { x: e.clientX, y: e.clientY };
    };

    const onPointerMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const state = graphStateRef.current;
      if (state.drag) {
        state.ry += (e.clientX - state.drag.x) * 0.008;
        state.rx = Math.max(-1.1, Math.min(1.1, state.rx + (e.clientY - state.drag.y) * 0.006));
        state.drag = { x: e.clientX, y: e.clientY };
      } else {
        const hv = pick(e.clientX - rect.left, e.clientY - rect.top);
        if (hv !== state.hover) {
          state.hover = hv;
          if (hv >= 0) {
            const n = N[hv];
            setActiveInfo({
              title: n.l,
              color: n.c,
              note: n.note,
              src: n.src
            });
          }
        }
      }
    };

    const onPointerUp = () => {
      graphStateRef.current.drag = null;
    };

    const onPointerLeave = () => {
      graphStateRef.current.drag = null;
      graphStateRef.current.hover = -1;
    };

    canvas.addEventListener('pointerdown', onPointerDown);
    canvas.addEventListener('pointermove', onPointerMove);
    canvas.addEventListener('pointerup', onPointerUp);
    canvas.addEventListener('pointerleave', onPointerLeave);
    window.addEventListener('resize', resize);

    resize();

    function loop() {
      animId = requestAnimationFrame(loop);
      const state = graphStateRef.current;
      state.t += 0.016;
      if (!state.drag && state.hover < 0) {
        state.ry += 0.0028;
      }
      draw();
    }
    loop();

    return () => {
      cancelAnimationFrame(animId);
      canvas.removeEventListener('pointerdown', onPointerDown);
      canvas.removeEventListener('pointermove', onPointerMove);
      canvas.removeEventListener('pointerup', onPointerUp);
      canvas.removeEventListener('pointerleave', onPointerLeave);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section className="wl-kg-section" id="knowledge">
      <div className="wl-kg-wrap">
        <div className="wl-kg-grid">
          
          {/* Left Column: Description & Filters */}
          <div className="wl-kg-text">
            <p className="wl-kg-eyebrow">+ MAYA'S KNOWLEDGE GRAPH</p>
            <h2 className="wl-kg-headline">
              Everything your university knows about her, <span className="wl-hl-orange">finally in one place</span>.
            </h2>
            <p className="wl-kg-lede">
              Today that knowledge is scattered across systems and a few people's memories. WorldLynk joins it into one living record that agents can reason over and staff can see. Drag to turn it. Hover any point.
            </p>

            {/* Filter Chips */}
            <div className="wl-kg-filters" role="group" aria-label="Focus the graph">
              <button
                type="button"
                className={`wl-filter-chip ${selectedCat === -1 ? 'wl-chip-active' : ''}`}
                onClick={() => setSelectedCat(-1)}
              >
                All Data
              </button>
              {KG_DATA.map((cat, i) => (
                <button
                  key={cat.name}
                  type="button"
                  className={`wl-filter-chip ${selectedCat === i ? 'wl-chip-active' : ''}`}
                  onClick={() => setSelectedCat(selectedCat === i ? -1 : i)}
                >
                  <span className="wl-chip-dot" style={{ backgroundColor: cat.color }} />
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Info Card */}
            <div className="wl-kg-info">
              <b className="wl-info-title">
                <i className="wl-info-dot" style={{ backgroundColor: activeInfo.color }} />
                {activeInfo.title}
              </b>
              <p className="wl-info-desc">{activeInfo.note}</p>
              <small className="wl-info-src">Source: {activeInfo.src}</small>
            </div>

            <p className="wl-kg-fine">Each office sees only the part of the record its role allows.</p>
          </div>

          {/* Right Column: 3D Interactive Canvas */}
          <div className="wl-kg-canvas-container">
            <canvas ref={canvasRef} className="wl-kg-canvas" aria-label="3D knowledge graph of a student record" />
          </div>

        </div>
      </div>
    </section>
  );
}
