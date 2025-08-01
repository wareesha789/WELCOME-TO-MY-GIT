const phraseInner = document.getElementById("phrase-inner");

// Updated and corrected list of IDs in display order
const letters = [
  "W", "E", "L", "C", "O", "M", "E2",
  "T", "O2", "W2", "I", "S", "H", "quote",
  "S2", "G", "I2", "T2"
];

function makeBubbleBurst(el) {
  const rect = el.getBoundingClientRect();
  const burst = new mojs.Burst({
    left: 0,
    top: 0,
    x: rect.left + rect.width / 2,
    y: rect.top + rect.height / 2,
    radius: { 0: 50 },
    count: 8,
    children: {
      shape: 'circle',
      radius: 5,
      fill: ['#ffffff', '#ff4081', '#70b2e9ff'],
      duration: 1000,
      easing: 'cubic.out'
    }
  });
  burst.play();
}

// Animate each letter in sequence with delay
letters.forEach((id, index) => {
  const el = document.getElementById(id);
  if (el) {
    setTimeout(() => {
      el.style.opacity = 0;
      makeBubbleBurst(el);
    }, index * 250); // Slight delay between each letter
  }
});
