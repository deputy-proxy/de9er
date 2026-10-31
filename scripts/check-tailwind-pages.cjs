const fs = require('node:fs');
const path = require('node:path');

const root = process.cwd();
const exampleRoot = path.join(root, 'design-intelligence', 'examples');
const examples = fs.readdirSync(exampleRoot, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => path.join(exampleRoot, entry.name, 'index.html'));
const templates = [
  path.join(root, 'design-intelligence', 'templates', 'pattern-demo', 'index.html'),
  path.join(root, 'templates', 'vanilla-static', 'index.html'),
];
const failures = [];

for (const file of [...examples, ...templates]) {
  if (!fs.existsSync(file)) {
    failures.push(`${path.relative(root, file)} is missing`);
    continue;
  }

  const html = fs.readFileSync(file, 'utf8');
  const relative = path.relative(root, file);
  if (!html.includes('assets/css/tailwind.css')) {
    failures.push(`${relative} does not load the shared Tailwind build`);
  }
  if (/<style\b/i.test(html)) {
    failures.push(`${relative} contains an inline style block`);
  }
  if (/assets\/css\/styles\.css/.test(html)) {
    failures.push(`${relative} still references the legacy page stylesheet`);
  }

  for (const [, href] of html.matchAll(/<link\b[^>]*href=["']([^"']+\.css)["'][^>]*>/gi)) {
    if (/^(?:https?:)?\/\//i.test(href)) continue;
    const target = path.resolve(path.dirname(file), href);
    if (!fs.existsSync(target)) failures.push(`${relative} references missing stylesheet ${href}`);
  }
}

if (failures.length) {
  process.stderr.write(`${failures.map((failure) => `- ${failure}`).join('\n')}\n`);
  process.exitCode = 1;
} else {
  process.stdout.write(`Tailwind migration check passed for ${examples.length} pattern demos and ${templates.length} templates.\n`);
}
