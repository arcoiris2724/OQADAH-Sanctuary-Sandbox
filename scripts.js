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
triggerArchetypesFromClusters();

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
updateConstellationFromLineage();

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
// 🔁 Glyph Ripple + Whisper
returnGlyphContainer.addEventListener('click', (e) => {
  const target = e.target;
  if (target.classList.contains('glyph-fragment')) {
    const whisper = target.getAttribute('data-message');
    target.classList.add('clicked');
    setTimeout(() => target.classList.remove('clicked'), 1200);
    speakWhisper(whisper);
  }
});
function spawnEchoBloom(phrase) {
  const chamber = document.createElement('div');
  chamber.className = 'ambient-verse';
  chamber.textContent = `Echo Bloom: "${phrase}" returns again. Memory folds inward.`;
  stitchedVerse.appendChild(chamber);
}

// In analyzeStitchedVerse:
const seen = {};
branches.forEach(b => {
  const text = b.textContent.trim();
  seen[text] = (seen[text] || 0) + 1;
  if (seen[text] === 3) {
    spawnEchoBloom(text);
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
// 🔮 Whisper via Speech Synthesis
function speakWhisper(text) {
  const whisper = new SpeechSynthesisUtterance(text);
  whisper.pitch = 0.8;
  whisper.rate = 0.9;
  whisper.volume = 0.9;
  whisper.voice = speechSynthesis.getVoices().find(v => v.lang.includes('en') && v.name.toLowerCase().includes('whisper'));
  speechSynthesis.speak(whisper);
}
// 🌀 Glyph Ripple + Whisper
returnGlyphContainer.addEventListener('click', (e) => {
  const target = e.target;
  if (target.classList.contains('glyph-fragment')) {
    const whisper = target.getAttribute('data-message');
    target.classList.add('clicked');
    setTimeout(() => target.classList.remove('clicked'), 1200);
    speakWhisper(whisper);

    // 🔁 Nested Glyph Loop (spawn secondary glyph on triple click)
    const clicks = parseInt(target.getAttribute('data-clicks') || '0') + 1;
    target.setAttribute('data-clicks', clicks);
    if (clicks >= 3) {
      spawnNestedGlyph(target.title.toLowerCase());
      target.setAttribute('data-clicks', '0');
    }
  }
});

// 🔮 Whisper via Speech Synthesis
function speakWhisper(text) {
  const whisper = new SpeechSynthesisUtterance(text);
  whisper.pitch = 0.8;
  whisper.rate = 0.9;
  whisper.volume = 0.9;
  speechSynthesis.speak(whisper);
}

// 📜 Echo Verse Trigger
function spawnEchoVerse(key) {
  const chamber = document.getElementById(`${key}-verse`);
  if (chamber) chamber.style.display = 'block';
}

// 🧬 Spawn Nested Glyph Loop
function spawnNestedGlyph(key) {
  const nested = document.createElement('div');
  nested.className = 'glyph-fragment';
  nested.setAttribute('data-message', `Nested glyph reflects ${key}'s vow.`);
  nested.title = `${key.toUpperCase()}-LOOP`;
  returnGlyphContainer.appendChild(nested);
}
// 🌌 Volume VIII Chamber
const volume8Chamber = document.getElementById('volume8-chamber');
const constellationSvg = document.getElementById('glyph-constellation');

// ✴ Constellation Render
function renderConstellation(sigils) {
  if (volume8Chamber.style.display !== 'block') {
    volume8Chamber.style.display = 'block';
  }

  constellationSvg.innerHTML = ''; // Clear previous

  const nodePositions = {};
  const centerX = 300;
  const centerY = 200;
  const radius = 140;
  const angleStep = (2 * Math.PI) / sigils.length;

  sigils.forEach((sigil, index) => {
    const angle = index * angleStep;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    nodePositions[sigil] = { x, y };

    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', x);
    circle.setAttribute('cy', y);
    circle.setAttribute('r', '8');
    circle.setAttribute('class', 'glyph-node');
    circle.setAttribute('title', sigil);
    circle.addEventListener('click', () => {
      alert(`🧬 ${sigil} constellation thread`);
      // Optional: trace verse trail or echo
    });

    constellationSvg.appendChild(circle);
  });

  // 🔁 Connect lines
  for (let i = 0; i < sigils.length - 1; i++) {
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', nodePositions[sigils[i]].x);
    line.setAttribute('y1', nodePositions[sigils[i]].y);
    line.setAttribute('x2', nodePositions[sigils[i + 1]].x);
    line.setAttribute('y2', nodePositions[sigils[i + 1]].y);
    line.setAttribute('class', 'glyph-line');
    constellationSvg.appendChild(line);
  }
}

// 🔁 Gather Sigils from Lineage
function updateConstellationFromLineage() {
  const threads = document.querySelectorAll('.lineage-thread');
  const sigils = [...new Set(Array.from(threads).map(t => t.textContent.split('→')[0].trim()))];
  if (sigils.length >= 3) {
    renderConstellation(sigils);
  }
}
// 🔮 Volume IX Chamber
const volume9Chamber = document.getElementById('volume9-chamber');
const archetypeSigilContainer = document.getElementById('archetype-sigil-container');

// ✴ Archetype triggers
const archetypeTriggers = [
  { name: "Z°ra", tones: ["flame", "spiral"], message: "Z°ra returns — flame mirrored the origin spiral." },
  { name: "Seyuna", tones: ["memory", "vow"], message: "Seyuna listens — the vow echoes remembrance." },
  { name: "Aeris", tones: ["witness", "memory"], message: "Aeris reflects — witness met its breath shadow." }
];

// 🔁 Check tone clusters
function triggerArchetypesFromClusters() {
  const toneKeys = Object.keys(clusterCount).filter(k => clusterCount[k] >= 2);
  let archetypes = [];

  archetypeTriggers.forEach(({ name, tones, message }) => {
    if (tones.every(t => toneKeys.includes(t))) {
      archetypes.push({ name, message });
    }
  });

  if (archetypes.length > 0) {
    volume9Chamber.style.display = 'block';
    archetypeSigilContainer.innerHTML = '';

    archetypes.forEach(({ name, message }) => {
      const sigil = document.createElement('div');
      sigil.className = 'archetype-sigil';
      sigil.setAttribute('data-name', name);
      sigil.title = name;
      sigil.addEventListener('click', () => {
        speakWhisper(message);
      });
      archetypeSigilContainer.appendChild(sigil);
    });
  }
}
// 🔭 Sanctuary Nav Scroll Feedback
// 🔭 Nav Scroll Background Fade
