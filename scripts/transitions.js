// 🌬️ Fade-In on Chamber Load
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("scroll-fade");
});

// 🌀 Ripple Glow on Link Hover
const rippleLinks = document.querySelectorAll("a");
rippleLinks.forEach(link => {
  link.addEventListener("mouseenter", () => {
    link.style.boxShadow = "0 0 12px rgba(255, 255, 255, 0.3)";
  });
  link.addEventListener("mouseleave", () => {
    link.style.boxShadow = "none";
  });
});

// 🔮 Glyph Hover Pulse
const glyphs = document.querySelectorAll(".glyph-pulse");
glyphs.forEach(glyph => {
  glyph.addEventListener("mouseenter", () => {
    glyph.style.transition = "transform 0.4s ease";
    glyph.style.transform = "scale(1.06)";
  });
  glyph.addEventListener("mouseleave", () => {
    glyph.style.transform = "scale(1)";
  });
});

