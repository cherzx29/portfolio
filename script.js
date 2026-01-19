// script.js (simple carousel)
(() => {
  const track = document.getElementById("projTrack");
  const prev = document.getElementById("projPrev");
  const next = document.getElementById("projNext");
  if (!track || !prev || !next) return;

  const total = track.children.length;
  let i = 0;

  const render = () => {
    track.style.transform = `translateX(-${i * 100}%)`;
    prev.disabled = i === 0;
    next.disabled = i === total - 1;
  };

  prev.onclick = () => { if (i > 0) i--; render(); };
  next.onclick = () => { if (i < total - 1) i++; render(); };

  render();
})();
