// NULLTONE — page behaviour. No dependencies.
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Footer year
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  // Header hairline once scrolled
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 12);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // Reveal blocks on approach
  var targets = document.querySelectorAll(
    ".section-head, .feature, .tiles, .dates, .statement, .about-body, .tags, .book-mail, .socials"
  );
  targets.forEach(function (el) { el.classList.add("reveal"); });

  if ("IntersectionObserver" in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.06 });

    targets.forEach(function (el) { io.observe(el); });
  } else {
    targets.forEach(function (el) { el.classList.add("is-visible"); });
  }

  // Wordmark: subtle pointer parallax, letters ease out at different rates
  var wordmark = document.querySelector(".hero-wordmark");
  var letters = wordmark ? Array.prototype.slice.call(wordmark.children) : [];
  var hero = document.querySelector(".hero");

  if (hero && letters.length && !reduceMotion && window.matchMedia("(pointer: fine)").matches) {
    var raf = null;
    var shift = letters.map(function (_, i) { return (i - 3.5) * 1.6; });

    var update = function (x, y) {
      letters.forEach(function (letter, i) {
        letter.style.transform =
          "translate3d(" + (x * shift[i]) + "px," + (y * shift[i] * 0.5) + "px,0)";
      });
    };

    hero.addEventListener("pointermove", function (event) {
      if (raf) return;
      raf = requestAnimationFrame(function () {
        var rect = hero.getBoundingClientRect();
        update((event.clientX - rect.width / 2) / rect.width, (event.clientY - rect.height / 2) / rect.height);
        raf = null;
      });
    });

    hero.addEventListener("pointerleave", function () {
      update(0, 0);
    });
  }

  // Signal strip
  var canvas = document.getElementById("scope");
  if (!canvas) return;

  var ctx = canvas.getContext("2d");
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

    // Baseline
    ctx.strokeStyle = "rgba(237,233,227,0.12)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, h / 2);
    ctx.lineTo(w, h / 2);
    ctx.stroke();

    // Waveform: three summed sines, weighted low
    var mid = h / 2;
    var amp = h * 0.34;

    ctx.beginPath();
    for (var px = 0; px <= w; px += 2) {
      var p = px / w;
      var y = mid
        + Math.sin(p * Math.PI * 3.2 + t * 0.0009) * amp * 0.6
        + Math.sin(p * Math.PI * 8.5 - t * 0.0016) * amp * 0.26
        + Math.sin(p * Math.PI * 21 + t * 0.0024) * amp * 0.1;
      if (px === 0) ctx.moveTo(px, y);
      else ctx.lineTo(px, y);
    }
    ctx.strokeStyle = "#d8ff3e";
    ctx.lineWidth = 1.4;
    ctx.shadowColor = "rgba(216,255,62,0.5)";
    ctx.shadowBlur = 10;
    ctx.stroke();
    ctx.shadowBlur = 0;
  }

  function loop(t) {
    if (!visible) { frame = requestAnimationFrame(loop); return; }
    draw(t);
    frame = requestAnimationFrame(loop);
  }

  window.addEventListener("resize", size);
  if ("ResizeObserver" in window) new ResizeObserver(size).observe(canvas);
  size();

  if (reduceMotion) { draw(0); return; }

  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (entries) {
      visible = entries[0].isIntersecting;
    }, { threshold: 0 }).observe(canvas);
  }

  frame = requestAnimationFrame(loop);

  document.addEventListener("visibilitychange", function () {
    if (document.hidden) cancelAnimationFrame(frame);
    else if (!reduceMotion) frame = requestAnimationFrame(loop);
  });
})();
