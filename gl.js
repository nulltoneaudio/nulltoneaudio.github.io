// NULLTONE — hero signal. Three.js is loaded from a CDN; if it fails the
// canvas stays transparent and the page reads normally.
import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.169.0/build/three.module.js";

var canvas = document.getElementById("gl");
var hero = document.getElementById("hero");
var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (canvas && hero) {
  try {
    init();
  } catch (err) {
    canvas.style.display = "none";
  }
}

function init() {
  var renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: false,
    alpha: false,
    powerPreference: "low-power"
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.6));

  var scene = new THREE.Scene();
  var camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

  var uniforms = {
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2(0, 0) },
    uRes: { value: new THREE.Vector2(1, 1) }
  };

  var material = new THREE.ShaderMaterial({
    uniforms: uniforms,
    vertexShader: [
      "varying vec2 vUv;",
      "void main() {",
      "  vUv = uv;",
      "  gl_Position = vec4(position.xy, 0.0, 1.0);",
      "}"
    ].join("\n"),
    fragmentShader: [
      "precision highp float;",
      "uniform float uTime;",
      "uniform vec2 uMouse;",
      "uniform vec2 uRes;",
      "varying vec2 vUv;",

      "float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123); }",

      "float noise(vec2 p) {",
      "  vec2 i = floor(p);",
      "  vec2 f = fract(p);",
      "  vec2 u = f * f * (3.0 - 2.0 * f);",
      "  float a = hash(i);",
      "  float b = hash(i + vec2(1.0, 0.0));",
      "  float c = hash(i + vec2(0.0, 1.0));",
      "  float d = hash(i + vec2(1.0, 1.0));",
      "  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);",
      "}",

      "float fbm(vec2 p) {",
      "  float v = 0.0;",
      "  float a = 0.5;",
      "  for (int i = 0; i < 5; i++) {",
      "    v += a * noise(p);",
      "    p = p * 2.03 + 17.3;",
      "    a *= 0.5;",
      "  }",
      "  return v;",
      "}",

      "void main() {",
      "  vec2 uv = vUv;",
      "  vec2 p = (uv - 0.5) * vec2(uRes.x / uRes.y, 1.0);",
      "  float t = uTime * 0.14;",
      "  vec2 m = uMouse * 0.26;",

      // domain warp: two passes of noise bending each other
      "  vec2 q = p * 2.1 + m;",
      "  float n1 = fbm(q + vec2(t * 0.7, -t * 0.5));",
      "  float n2 = fbm(q * 1.85 + n1 * 1.5 + vec2(-t * 0.45, t * 0.6));",

      // fine topographic rings, displaced by the warp
      "  float r = length(p - m * 0.5);",
      "  float rings = sin((r + n2 * 0.26) * 46.0 - t * 3.4);",
      "  rings = smoothstep(0.66, 1.0, rings);",
      "  float flow = smoothstep(0.35, 0.95, sin(n1 * 9.0 + t * 1.5) * 0.5 + 0.5);",
      "  float mask = smoothstep(0.92, 0.12, r);",

      "  vec3 lime = vec3(0.847, 1.0, 0.243);",
      "  vec3 coral = vec3(1.0, 0.416, 0.239);",
      "  vec3 base = vec3(0.031, 0.035, 0.039);",

      "  vec3 col = base;",
      "  col += lime * (rings * (0.14 + 0.34 * flow) * mask);",
      "  col += lime * (0.05 * smoothstep(0.6, 0.0, r));",
      "  col += coral * (0.07 * n2 * mask);",
      "  col *= 0.88 + 0.12 * sin(uv.y * uRes.y * 0.9);",

      "  gl_FragColor = vec4(col, 1.0);",
      "}"
    ].join("\n")
  });

  scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material));

  function resize() {
    var w = canvas.clientWidth || window.innerWidth;
    var h = canvas.clientHeight || window.innerHeight;
    renderer.setSize(w, h, false);
    uniforms.uRes.value.set(w, h);
  }

  var target = { x: 0, y: 0 };
  var current = { x: 0, y: 0 };

  window.addEventListener("pointermove", function (event) {
    target.x = (event.clientX / window.innerWidth) * 2 - 1;
    target.y = -((event.clientY / window.innerHeight) * 2 - 1);
  }, { passive: true });

  window.addEventListener("resize", resize);
  if ("ResizeObserver" in window) new ResizeObserver(resize).observe(canvas);
  resize();

  var visible = true;
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (entries) {
      visible = entries[0].isIntersecting;
    }, { threshold: 0 }).observe(hero);
  }

  var clock = new THREE.Clock();
  var frame = 0;

  function draw() {
    current.x += (target.x - current.x) * 0.045;
    current.y += (target.y - current.y) * 0.045;
    uniforms.uMouse.value.set(current.x, current.y);
    uniforms.uTime.value = clock.getElapsedTime();
    renderer.render(scene, camera);
  }

  function loop() {
    frame = requestAnimationFrame(loop);
    if (visible) draw();
  }

  if (reduceMotion) {
    draw();
    return;
  }

  loop();

  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      cancelAnimationFrame(frame);
    } else {
      clock.start();
      loop();
    }
  });
}
