(function () {
  'use strict';

  function init() {
    var canvas = document.getElementById('globe-canvas');
    if (!canvas) return;

    var ctx = canvas.getContext('2d');
    var dpr = window.devicePixelRatio || 1;
    var W, H, cx, cy, R;

    function resize() {
      /* Force explicit size if offsetWidth is 0 (abs-positioned canvas) */
      W = canvas.offsetWidth  || 560;
      H = canvas.offsetHeight || 560;
      canvas.width  = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cx = W / 2;
      cy = H / 2;
      R  = Math.min(W, H) * 0.46;
    }

    resize();
    window.addEventListener('resize', resize);

    var phase = 0;
    var N_LON = 14;
    var LATS  = [-75, -60, -45, -30, -15, 0, 15, 30, 45, 60, 75];

    function rgba(a) {
      return 'rgba(0,53,148,' + a.toFixed(3) + ')';
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);

      /* clip to sphere */
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.clip();

      /* latitude rings */
      LATS.forEach(function (lat) {
        var rad  = lat * Math.PI / 180;
        var y    = cy - R * Math.sin(rad);
        var rx   = R  * Math.cos(rad);
        var ry   = rx * 0.28;
        var isEq = lat === 0;
        ctx.beginPath();
        ctx.ellipse(cx, y, Math.max(rx, 0.5), Math.max(ry, 0.5), 0, 0, Math.PI * 2);
        ctx.strokeStyle = rgba(isEq ? 0.35 : 0.18);
        ctx.lineWidth   = isEq ? 1.4 : 0.8;
        ctx.stroke();
      });

      /* longitude arcs — spin with phase */
      for (var i = 0; i < N_LON; i++) {
        var phi  = (i / N_LON) * Math.PI + phase;
        var cosP = Math.cos(phi);
        var front = cosP > 0;
        var rx2  = Math.max(R * Math.abs(cosP), 0.5);
        var alpha = front
          ? 0.12 + 0.30 * cosP
          : 0.04 + 0.07 * Math.abs(cosP);
        ctx.beginPath();
        ctx.ellipse(cx, cy, rx2, R, 0, 0, Math.PI * 2);
        ctx.strokeStyle = rgba(alpha);
        ctx.lineWidth   = front ? 0.9 : 0.6;
        ctx.stroke();
      }

      ctx.restore();

      /* outer ring */
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.strokeStyle = rgba(0.42);
      ctx.lineWidth   = 1.8;
      ctx.stroke();

      /* top-left highlight */
      var hi = ctx.createRadialGradient(cx - R * 0.32, cy - R * 0.32, 0, cx, cy, R);
      hi.addColorStop(0,    'rgba(255,255,255,0.22)');
      hi.addColorStop(0.45, 'rgba(255,255,255,0.04)');
      hi.addColorStop(1,    'rgba(0,0,0,0)');
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fillStyle = hi;
      ctx.fill();

      /* outer glow */
      var glow = ctx.createRadialGradient(cx, cy, R * 0.88, cx, cy, R * 1.24);
      glow.addColorStop(0, rgba(0.12));
      glow.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.beginPath();
      ctx.arc(cx, cy, R * 1.24, 0, Math.PI * 2);
      ctx.fillStyle = glow;
      ctx.fill();

      phase += 0.006;
      requestAnimationFrame(draw);
    }

    requestAnimationFrame(draw);
  }

  /* Wait for full layout before measuring canvas */
  if (document.readyState === 'complete') {
    init();
  } else {
    window.addEventListener('load', init);
  }

})();
