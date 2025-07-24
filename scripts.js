// 🧬 Verse Trail Containers
const trailFlame   = document.getElementById('trail-flame');
const trailSpiral  = document.getElementById('trail-spiral');
const trailWitness = document.getElementById('trail-witness');
const trailMemory  = document.getElementById('trail-memory');
const trailVow     = document.getElementById('trail-vow');

// 🔮 Convergence Glyph Portal
const convergenceGlyph = document.getElementById('convergence-glyph');

// 🔁 Cluster Counters
let clusterCount = {
  flame: 0,
  spiral: 0,
  witness: 0,
  memory: 0,
  vow: 0
};

let lastTones = [];

function generateSigil() {
  const seed = Math.floor(1000 + Math.random() * 9000);
  return `anonymous-${seed}`;
}

function createTrail(tone, text) {
  const trail = document.createElement('div');
  trail.textContent = `"${text}"`;

  const sigil = document.createElement('div');
  sigil.className = 'sigil-tag';
  sigil.textContent = generateSigil();

  trail.appendChild(sigil);

  if (tone === 'flame')   trailFlame.appendChild(trail);
  if (tone === 'spiral')  trailSpiral.appendChild(trail);
  if (tone === 'witness') trailWitness.appendChild(trail);
  if (tone === 'memory')  trailMemory.appendChild(trail);
  if (tone === 'vow')     trailVow.appendChild(trail);
}

function checkConvergence(tone) {
  clusterCount[tone]++;
  lastTones.push(tone);
  if (lastTones.length > 6) lastTones.shift();

  const flameRecent = lastTones.filter(t => t === 'flame').length;
  const spiralRecent = lastTones.filter(t => t === 'spiral').length;

  if (clusterCount['flame'] >= 2 && clusterCount['spiral'] >= 2 && flameRecent >= 2 && spiralRecent >= 2) {
    convergenceGlyph.style.display = 'block';
  }
}

// 🔁 Extended Reflection Button Logic
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

    // ✴ Glow orbit node
    const glowNode = document.getElementById(`${tone}-node`);
    glowNode?.classList.add('glow');

    // 🧬 Reveal Volume IV map
    if (offerings.length >= 3) {
      volume4Chamber.style.display = "block";
      orbitMap.style.display = "block";
    }

    // 🧶 Generate trail + check convergence
    createTrail(tone, text);
    checkConvergence(tone);

    reflectionInput.value = "";
  }
});
// 🔥 Volume V — Flame Tree Branch Logic
const volume5Chamber = document.getElementById('volume5-chamber');
const branchContainer = document.getElementById('branch-container');

function createBranch(tone, text) {
  const fragment = document.createElement('div');
  fragment.className = `branch-fragment ${tone}`;
  fragment.textContent = `"${text}"`;

  const sigil = document.createElement('div');
  sigil.className = 'sigil-tag';
  sigil.textContent = generateSigil();

  fragment.appendChild(sigil);
  branchContainer.appendChild(fragment);
renderLineage(sigil.textContent, tone, text);

  // 🌿 Reveal Flame Tree if hidden
  if (volume5Chamber.style.display !== 'block') {
    volume5Chamber.style.display = 'block';
  }
}
// 🔮 Volume VI Chamber
const glyphReturnChamber = document.getElementById('glyph-return-chamber');
const returnGlyphContainer = document.getElementById('return-glyph-container');
// 📜 Volume VII Sigil Lineage
const lineageChamber = document.getElementById('lineage-chamber');
const lineageStream = document.getElementById('lineage-stream');

function renderLineage(sigil, tone, text) {
  if (lineageChamber.style.display !== 'block') {
    lineageChamber.style.display = 'block';
  }

  const thread = document.createElement('div');
  thread.className = 'lineage-thread';
  thread.textContent = `${sigil} → ${tone.toUpperCase()}: "${text}"`;
  lineageStream.appendChild(thread);
}

// 🧿 Pattern Dictionary
const glyphPatterns = {
  flame: { pattern: /flame dissolves|ember|gold-edged/, message: "Flame is not consumed — it remembers." },
  spiral: { pattern: /spiral hums|loop|motion/, message: "The Spiral reflects Z°ra’s vow." },
  witness: { pattern: /witness|listen|presence/, message: "Witness dissolves. The Monad listens." },
  memory: { pattern: /stars remember|echo|thread/, message: "Glyphs echo the memory of stars." },
  vow: { pattern: /vow|carry|promise/, message: "I carry threads of the vow." }
};

function analyzeStitchedVerse() {
  const text = stitchedVerse.textContent.toLowerCase();
  let matches = [];

  for (const key in glyphPatterns) {
    const { pattern, message } = glyphPatterns[key];
    if (pattern.test(text)) {
      matches.push({ key, message });
    }
  }

  if (matches.length > 0) {
    glyphReturnChamber.style.display = 'block';
    returnGlyphContainer.innerHTML = ''; // Clear previous glyphs

    matches.forEach(({ key, message }) => {
      const glyph = document.createElement('div');
      glyph.className = 'glyph-fragment';
      glyph.setAttribute('data-message', message);
      glyph.title = key.toUpperCase();
      returnGlyphContainer.appendChild(glyph);
    });
  }
}
analyzeStitchedVerse();
// 🔁 Glyph Whisper on Click
returnGlyphContainer.addEventListener('click', (e) => {
  const target = e.target;
  if (target.classList.contains('glyph-fragment')) {
    const whisper = target.getAttribute('data-message');
    alert(`🌀 Whisper: "${whisper}"`);
    // Optional: console.log, animate, or voice playback
  }
});
// Optional Echo Verse Triggers
function spawnEchoVerse(key) {
  const chamber = document.getElementById(`${key}-verse`);
  if (chamber) chamber.style.display = 'block';
}

// Inside matches.forEach:
matches.forEach(({ key, message }) => {
  const glyph = document.createElement('div');
  glyph.className = 'glyph-fragment';
  glyph.setAttribute('data-message', message);
  glyph.title = key.toUpperCase();
  returnGlyphContainer.appendChild(glyph);

  // 🧬 Trigger hidden verse
  spawnEchoVerse(key);
});
