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
