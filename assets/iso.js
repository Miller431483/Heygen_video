window.HF = (() => {
  const COS = 0.8660254037844386;
  const SIN = 0.5;
  let S = 60;
  let OX = 960;
  let OY = 540;
  const set = (s, ox, oy) => { S = s; OX = ox; OY = oy; };
  const P = (x, y, z = 0) => [OX + (x - y) * COS * S, OY + (x + y) * SIN * S - z * S];
  const pts = (arr) => arr.map((p) => p.map((n) => (Math.round(n * 10) / 10).toFixed(1)).join(",")).join(" ");
  const poly = (arr, fill, extra = "") => `<polygon points="${pts(arr)}" fill="${fill}" ${extra}/>`;
  const cube = (x, y, s, h, c) => {
    const top = [P(x, y, h), P(x + s, y, h), P(x + s, y + s, h), P(x, y + s, h)];
    const left = [P(x, y + s, 0), P(x + s, y + s, 0), P(x + s, y + s, h), P(x, y + s, h)];
    const right = [P(x + s, y, 0), P(x + s, y + s, 0), P(x + s, y + s, h), P(x + s, y, h)];
    return poly(top, c.top) + poly(left, c.left) + poly(right, c.right);
  };
  const pyramid = (x, y, s, h, ah, shades) => {
    const a = P(x + s / 2, y + s / 2, h + ah);
    const f = [
      [P(x, y, h), P(x + s, y, h), a],
      [P(x + s, y, h), P(x + s, y + s, h), a],
      [P(x + s, y + s, h), P(x, y + s, h), a],
      [P(x, y + s, h), P(x, y, h), a],
    ];
    return f.map((face, i) => poly(face, shades[i % shades.length])).join("");
  };
  const ground = (x, y, s, fill, extra = "") => poly([P(x, y, 0), P(x + s, y, 0), P(x + s, y + s, 0), P(x, y + s, 0)], fill, extra);
  const mulberry32 = (seed) => () => {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  const el = (id) => document.getElementById(id);
  return { set, P, pts, poly, cube, pyramid, ground, mulberry32, el };
})();
