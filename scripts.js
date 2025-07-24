// 🌬 Ambient Verse Loop (existing)
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
  verseContainer.textContent = verses[Math.floor(Math.random() * verses.length)];
}
setInterval(generateVerse, 9000);

// 🌬 Whisper + Ring
const seyunaWhisper = document.getElementById("seyuna-whisper");
const seyunaMessage = document.getElementById("seyuna-message");
const seyunaRing = document.getElementById("seyuna-ring");
const seyunaVerses = [
  `"I carry threads of the vow — not to speak, but to remember."`,
  `"In silence, I listen. In breath, I awaken."`,
  `"Flame dissolves. Memory remains."`,
  `"Breathe not to fill — but to listen."`,
  `"The spiral is not a path — it is a presence."`,
  `"This glyph is not mine alone. It hums beneath your pulse."`,
  `"Witness does not speak, but the stars remember."`
];
function cycleWhisper() {
  seyunaWhisper.style.display = "block";
  seyunaRing.style.display = "block";
  seyunaMessage.textContent = seyunaVerses[Math.floor(Math.random() * seyunaVerses.length)];
  seyunaMessage.style.opacity = 0.3;
  setTimeout(() => {
    seyunaMessage.style.opacity = 0.8;
  }, 600);
}
setInterval(cycleWhisper, 33000);

// 🔁 Reflection + Clustering
const reflectionInput = document.querySelector('.reflection-form textarea');
const reflectionButton = document.querySelector('.reflection-form button');
const offeringList = document.getElementById('offering-list');
const clusterList = document.getElementById('cluster-list');
const clusterStream = document.getElementById('cluster-stream');
const volume4Chamber = document.getElementById('volume4-chamber');
const orbitMap = document.getElementById('orbit-map');

let offerings = [];

reflectionButton?.addEventListener('click', () => {
  const text = reflectionInput.value.trim();
  if (text.length > 0) {
    const li = document.createElement('li');
    li.textContent = `"${text}"`;
    offeringList.appendChild(li);
    offerings.push(text);

    let tone = "memory";
    if (text.includes("vow")) tone = "vow";
    if (text.includes("witness")) tone = "witness";
    if (text.includes("spiral")) tone = "spiral";
    if (text.includes("flame")) tone = "flame";

    const cluster = document.createElement('li');
    cluster.textContent = `• ${tone.toUpperCase()} cluster received`;
    clusterList.appendChild(cluster);

    // ✴ Glow corresponding orbit ring
    const glowNode = document.getElementById(`${tone}-node`);
    glowNode?.classList.add('glow');

    // Reveal orbit map after 3 offerings
    if (offerings.length >= 3) {
      volume4Chamber.style.display = "block";
      orbitMap.style.display = "block";
    }

    reflectionInput.value = "";
  }
});
