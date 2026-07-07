import sharp from 'sharp';
import { readdirSync, statSync, renameSync, unlinkSync } from 'fs';
import { join } from 'path';

const dir = 'public/images';
// Max width per usage: portraits/hero ~900px wide is plenty; offices ~1400px.
const widths = {
  'hero.png': 1000,
  'office-weho.png': 1400,
  'office-sd.png': 1400,
};
const defaultWidth = 800;

for (const file of readdirSync(dir)) {
  if (!file.endsWith('.png')) continue;
  const src = join(dir, file);
  const out = join(dir, file.replace(/\.png$/, '.webp'));
  const w = widths[file] ?? defaultWidth;
  const before = statSync(src).size;
  await sharp(src)
    .resize({ width: w, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(out);
  const after = statSync(out).size;
  unlinkSync(src);
  console.log(`${file} -> ${file.replace(/\.png$/, '.webp')}  ${(before / 1024 / 1024).toFixed(2)}MB -> ${(after / 1024).toFixed(0)}KB`);
}
