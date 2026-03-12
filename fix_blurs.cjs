const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src');

const colorMap = {
  'primary': '59,130,246',
  'secondary': '139,92,246',
  'accent': '16,185,129'
};

function processDirectory(directory) {
  const files = fs.readdirSync(directory);

  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;

      // Match patterns like: bg-primary/10 rounded-full blur-[120px]
      // Or: bg-primary/5 rounded-full blur-[80px]
      const regex = /bg-(primary|secondary|accent)\/(\d+)\s+rounded-full\s+blur-\[\d+px\]/g;
      
      content = content.replace(regex, (match, color, opacity) => {
        changed = true;
        const rgb = colorMap[color];
        const alpha = parseInt(opacity) / 100;
        // Increase opacity slightly for radial gradient to match the previous visual impact
        // e.g. 10 -> 0.15, 5 -> 0.1
        const adjustedAlpha = Math.min(1, alpha + 0.05);
        return `bg-[radial-gradient(ellipse_at_center,_rgba(${rgb},${adjustedAlpha})_0%,_transparent_70%)] rounded-full`;
      });

      if (changed) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

processDirectory(directoryPath);
console.log('Done!');
