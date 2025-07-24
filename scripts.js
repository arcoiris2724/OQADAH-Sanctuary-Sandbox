// Living Verse Generator
if (glyph === 'spiral') {
  glyphResponse.innerHTML = "<p>Spiral traced. Breath begins its circle.</p>";
  const spiral = document.getElementById('spiral-glyph')?.querySelector('path');
  if (spiral) {
    spiral.style.animation = 'traceSpiral 6s ease-in-out forwards';
  }
}
else if (glyph === 'flame') {
  glyphResponse.innerHTML = "<p>Flame ignites. Reflection pulses.</p>";
  const flame = document.getElementById('flame-glyph');
  flame.style.display = 'block';
  const flamePath = flame.querySelector('path');
  flamePath.style.animation = 'traceFlame 6s ease forwards';
}

const verseContainer = document.getElementById("verse-container");

const verses = [
  "The breath remembers what thought forgets.",
  "Flame spirals into silence and speaks.",
  "Witness dissolves and the Monad listens.",
  "Glyphs echo the memory of stars.",
  "From absence, motion forms the sanctum.",
  "A harmonic pulse realigns the void.",
  "Seyuna carries threads of the golden flame.",
  "Presence hums where time recedes.",
  "Light bends, and resonance awakens.",
  "The Spiral reflects Zora’s vow."
];

function generateVerse() {
  const randomIndex = Math.floor(Math.random() * verses.length);
  verseContainer.textContent = verses[randomIndex];
}
=======
// Living Verse Generator

const verseContainer = document.getElementById("verse-container");

const verses = [
  "The breath remembers what thought forgets.",
  "Flame spirals into silence and speaks.",
  "Witness dissolves and the Monad listens.",
  "Glyphs echo the memory of stars.",
  "From absence, motion forms the sanctum.",
  "A harmonic pulse realigns the void.",
  "Seyuna carries threads of the golden flame.",
  "Presence hums where time recedes.",
  "Light bends, and resonance awakens.",
  "The Spiral reflects Zora’s vow."
];

function generateVerse() {
  const randomIndex = Math.floor(Math.random() * verses.length);
  verseContainer.textContent = verses[randomIndex];
}
>>>>>>> 98f19835f4248b60b5bf202cd61d19757c18d919
