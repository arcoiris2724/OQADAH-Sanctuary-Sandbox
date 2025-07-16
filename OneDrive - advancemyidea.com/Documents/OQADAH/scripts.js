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
