import { useEffect, useRef } from "react";

const SimplexNoise = (() => {
  const F2 = 0.5 * (Math.sqrt(3) - 1);
  const G2 = (3 - Math.sqrt(3)) / 6;
  const F3 = 1 / 3;
  const G3 = 1 / 6;
  const grad3 = [
    [1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],
    [1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],
    [0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1],
  ];

  class Simplex {
    constructor(seed) {
      this.perm = new Uint8Array(512);
      this.permMod12 = new Uint8Array(512);
      const p = new Uint8Array(256);
      seed = seed || Math.random() * 65536;
      for (let i = 0; i < 256; i++) p[i] = i;
      for (let i = 255; i > 0; i--) {
        seed = (seed * 16807) % 2147483647;
        const j = seed % (i + 1);
        [p[i], p[j]] = [p[j], p[i]];
      }
      for (let i = 0; i < 512; i++) {
        this.perm[i] = p[i & 255];
        this.permMod12[i] = this.perm[i] % 12;
      }
    }

    noise3D(xin, yin, zin) {
      const { perm, permMod12 } = this;
      let n0, n1, n2, n3;
      const s = (xin + yin + zin) * F3;
      const i = Math.floor(xin + s), j = Math.floor(yin + s), k = Math.floor(zin + s);
      const t = (i + j + k) * G3;
      const x0 = xin - (i - t), y0 = yin - (j - t), z0 = zin - (k - t);
      let i1, j1, k1, i2, j2, k2;
      if (x0 >= y0) {
        if (y0 >= z0) { i1=1;j1=0;k1=0;i2=1;j2=1;k2=0; }
        else if (x0 >= z0) { i1=1;j1=0;k1=0;i2=1;j2=0;k2=1; }
        else { i1=0;j1=0;k1=1;i2=1;j2=0;k2=1; }
      } else {
        if (y0 < z0) { i1=0;j1=0;k1=1;i2=0;j2=1;k2=1; }
        else if (x0 < z0) { i1=0;j1=1;k1=0;i2=0;j2=1;k2=1; }
        else { i1=0;j1=1;k1=0;i2=1;j2=1;k2=0; }
      }
      const x1 = x0-i1+G3, y1 = y0-j1+G3, z1 = z0-k1+G3;
      const x2 = x0-i2+2*G3, y2 = y0-j2+2*G3, z2 = z0-k2+2*G3;
      const x3 = x0-1+3*G3, y3 = y0-1+3*G3, z3 = z0-1+3*G3;
      const ii = i & 255, jj = j & 255, kk = k & 255;
      let t0 = 0.6-x0*x0-y0*y0-z0*z0;
      n0 = t0 < 0 ? 0 : (() => { t0*=t0; const gi=permMod12[ii+perm[jj+perm[kk]]]; return t0*t0*(grad3[gi][0]*x0+grad3[gi][1]*y0+grad3[gi][2]*z0); })();
      let t1 = 0.6-x1*x1-y1*y1-z1*z1;
      n1 = t1 < 0 ? 0 : (() => { t1*=t1; const gi=permMod12[ii+i1+perm[jj+j1+perm[kk+k1]]]; return t1*t1*(grad3[gi][0]*x1+grad3[gi][1]*y1+grad3[gi][2]*z1); })();
      let t2 = 0.6-x2*x2-y2*y2-z2*z2;
      n2 = t2 < 0 ? 0 : (() => { t2*=t2; const gi=permMod12[ii+i2+perm[jj+j2+perm[kk+k2]]]; return t2*t2*(grad3[gi][0]*x2+grad3[gi][1]*y2+grad3[gi][2]*z2); })();
      let t3 = 0.6-x3*x3-y3*y3-z3*z3;
      n3 = t3 < 0 ? 0 : (() => { t3*=t3; const gi=permMod12[ii+1+perm[jj+1+perm[kk+1]]]; return t3*t3*(grad3[gi][0]*x3+grad3[gi][1]*y3+grad3[gi][2]*z3); })();
      return 32 * (n0 + n1 + n2 + n3);
    }
  }
  return Simplex;
})();

const PALETTE = [
  { r: 249, g: 115, b: 22 },  // orange-500
  { r: 234, g: 88,  b: 12 },  // orange-600
  { r: 251, g: 146, b: 60 },  // orange-400
  { r: 194, g: 65,  b: 12 },  // orange-800
  { r: 253, g: 186, b: 116 }, // orange-300
  { r: 220, g: 100, b: 40 },  // warm blend
  { r: 180, g: 83,  b: 30 },  // deep amber
];

function lerpColor(a, b, t) {
  return { r: a.r + (b.r - a.r) * t, g: a.g + (b.g - a.g) * t, b: a.b + (b.b - a.b) * t };
}

function getColor(noiseVal) {
  const t = (noiseVal + 1) * 0.5;
  const idx = t * (PALETTE.length - 1);
  const i = Math.floor(idx);
  const f = idx - i;
  return lerpColor(
    PALETTE[Math.min(i, PALETTE.length - 1)],
    PALETTE[Math.min(i + 1, PALETTE.length - 1)],
    f
  );
}

const FlowField = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const noise = new SimplexNoise(42);
    const dpr = window.devicePixelRatio || 1;

    let W, H;
    let animId;
    const PARTICLE_COUNT = 1800;
    const NOISE_SCALE = 0.003;
    const SPEED = 1.0;
    const MOUSE_RADIUS = 150;
    const MOUSE_FORCE = 2.5;
    const mouse = { x: -9999, y: -9999, active: false };

    function resize() {
      const rect = canvas.parentElement.getBoundingClientRect();
      W = rect.width;
      H = rect.height;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width = W + "px";
      canvas.style.height = H + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.fillStyle = "rgba(2, 6, 23, 1)";
      ctx.fillRect(0, 0, W, H);
    }

    function createParticle() {
      return {
        x: Math.random() * W,
        y: Math.random() * H,
        speed: 0.3 + Math.random() * 0.8,
        alpha: 0.08 + Math.random() * 0.35,
        size: 0.5 + Math.random() * 1.2,
      };
    }

    resize();
    const particles = Array.from({ length: PARTICLE_COUNT }, createParticle);
    let time = 0;

    function draw() {
      ctx.fillStyle = "rgba(2, 6, 23, 0.04)";
      ctx.fillRect(0, 0, W, H);
      time += 0.0008;

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const p = particles[i];
        const nx = p.x * NOISE_SCALE;
        const ny = p.y * NOISE_SCALE;
        const angle = noise.noise3D(nx, ny, time) * Math.PI * 2;
        const colorNoise = noise.noise3D(nx * 1.5 + 100, ny * 1.5 + 100, time * 0.5);

        let vx = Math.cos(angle) * p.speed * SPEED;
        let vy = Math.sin(angle) * p.speed * SPEED;

        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MOUSE_RADIUS && dist > 0) {
            const force = (1 - dist / MOUSE_RADIUS) * MOUSE_FORCE;
            vx += (dx / dist) * force;
            vy += (dy / dist) * force;
          }
        }

        const px = p.x;
        const py = p.y;
        p.x += vx;
        p.y += vy;

        const color = getColor(colorNoise);
        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(p.x, p.y);
        ctx.strokeStyle = `rgba(${Math.round(color.r)},${Math.round(color.g)},${Math.round(color.b)},${p.alpha})`;
        ctx.lineWidth = p.size;
        ctx.stroke();

        if (p.x < -20 || p.x > W + 20 || p.y < -20 || p.y > H + 20) {
          p.x = Math.random() * W;
          p.y = Math.random() * H;
        }
      }
      animId = requestAnimationFrame(draw);
    }

    function onMouseMove(e) {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    }
    function onMouseLeave() { mouse.active = false; }
    function onTouchMove(e) {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.touches[0].clientX - rect.left;
      mouse.y = e.touches[0].clientY - rect.top;
      mouse.active = true;
    }
    function onTouchEnd() { mouse.active = false; }

    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", onMouseLeave);
    canvas.addEventListener("touchmove", onTouchMove, { passive: true });
    canvas.addEventListener("touchend", onTouchEnd);
    window.addEventListener("resize", resize);

    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
      canvas.removeEventListener("touchmove", onTouchMove);
      canvas.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.7 }}
    />
  );
};

export default FlowField;
