// NULLTONE — page behaviour. No dependencies.
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Footer year
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  // Header hairline after scrolling
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // Reveal sections on approach
  var targets = document.querySelectorAll(".section-head, .release, .tool, .about-grid, .big-mail, .channels");
  targets.forEach(function (el) { el.classList.add("reveal"); });

  if ("IntersectionObserver" in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.08 });

    targets.forEach(function (el) { io.observe(el); });
  } else {
    targets.forEach(function (el) { el.classList.add("is-visible"); });
  }

  // Oscilloscope
  var canvas = document.getElementById("scope");
  if (!canvas) return;

  var ctx = canvas.getContext("2d");
  var ampEl = document.getElementById("amp");
  var visible = true;
  var frame = 0;

  function size() {
    var ratio = window.devicePixelRatio || 1;
    var rect = canvas.getBoundingClientRect();
    if (!rect.width) return;
    canvas.width = Math.round(rect.width * ratio);
    canvas.height = Math.round(rect.height * ratio);
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    draw(0);
  }

  function draw(t) {
    var w = canvas.clientWidth;
    var h = canvas.clientHeight;
    if (!w || !h) return;

    ctx.clearRect(0, 0, w, h);

    // Grid
    ctx.strokeStyle = "rgba(237,233,227,0.08)";
    ctx.lineWidth = 1;
    for (var x = 0; x <= w; x += w / 8) {
      ctx.beginPath();
      ctx.moveTo(Math.round(x) + 0.5, 0);
      ctx.lineTo(Math.round(x) + 0.5, h);
      ctx.stroke();
    }
    ctx.beginPath();
    ctx.moveTo(0, Math.round(h / 2) + 0.5);
    ctx.lineTo(w, Math.round(h / 2) + 0.5);
    ctx.stroke();

    // Waveform: three summed sines, bass-heavy
    var mid = h / 2;
    var amp = h * 0.3;

    ctx.beginPath();
    for (var px = 0; px <= w; px += 2) {
      var p = px / w;
      var y = mid
        + Math.sin(p * Math.PI * 4 + t * 0.0011) * amp * 0.55
        + Math.sin(p * Math.PI * 9 - t * 0.0018) * amp * 0.28
        + Math.sin(p * Math.PI * 19 + t * 0.0027) * amp * 0.12;
      if (px === 0) ctx.moveTo(px, y);
      else ctx.lineTo(px, y);
    }
    ctx.strokeStyle = "#d8ff3e";
    ctx.lineWidth = 1.6;
    ctx.shadowColor = "rgba(216,255,62,0.55)";
    ctx.shadowBlur = 12;
    ctx.stroke();
    ctx.shadowBlur = 0;

    // Peak readout between -24 and -6 dBFS
    if (ampEl) {
      var peak = -24 + Math.abs(Math.sin(t * 0.0007)) * 18;
      ampEl.textContent = peak.toFixed(1) + " dB";
    }
  }

  function loop(t) {
    if (!visible) { frame = requestAnimationFrame(loop); return; }
    draw(t);
    frame = requestAnimationFrame(loop);
  }

  window.addEventListener("resize", size);

  if ("ResizeObserver" in window) {
    new ResizeObserver(size).observe(canvas);
  }

  size();

  if (reduceMotion) {
    draw(0);
    return;
  }

  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (entries) {
      visible = entries[0].isIntersecting;
    }, { threshold: 0 }).observe(canvas);
  }

  frame = requestAnimationFrame(loop);

  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      cancelAnimationFrame(frame);
    } else if (!reduceMotion) {
      frame = requestAnimationFrame(loop);
    }
  });
})();
