const fs = require('fs');

const script = fs.readFileSync('script.js', 'utf8');
const newScript = script.replace('process.env.INSTAGRAM_ACCESS_TOKEN', `"${process.env.INSTAGRAM_ACCESS_TOKEN}"`);
fs.writeFileSync('dist/script.js', newScript);

fs.copyFileSync('index.html', 'dist/index.html');
fs.copyFileSync('styles.css', 'dist/styles.css');
