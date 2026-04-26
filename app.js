// --- Character Customization Logic ---

/**
 * Change a character part (hair, eyes, lips) by swapping the image source.
 * @param {string} part - The part of the character (hair, eyes, lips).
 * @param {number} index - The image index (1-3).
 */
function changePart(part, index) {
  const img = document.getElementById(part);
  img.src = `assets/${part}${index}.png`;
}

/**
 * Toggle visibility of an accessory layer.
 * @param {string} id - The accessory image element ID.
 */
function toggleAccessory(id) {
  const el = document.getElementById(id);
  el.style.display = (el.style.display === 'none') ? 'block' : 'none';
}

// --- Export to PNG ---

document.getElementById('downloadBtn').addEventListener('click', downloadCharacter);

/**
 * Capture the character element and export as PNG.
 * Uses html2canvas (simple HTML DOM to image library).
 */
function downloadCharacter() {
  // Load html2canvas dynamically if not present
  if (typeof html2canvas === 'undefined') {
    const script = document.createElement('script');
    script.src = '[cdn.jsdelivr.net](https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js)';
    script.onload = captureAndDownload;
    document.body.appendChild(script);
  } else {
    captureAndDownload();
  }
}

/**
 * Captures character and triggers download.
 */
function captureAndDownload() {
  const character = document.getElementById('character');
  html2canvas(character, { backgroundColor: null }).then(canvas => {
    const link = document.createElement('a');
    link.download = 'charectize.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  });
}
