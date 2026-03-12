// Script to convert all PNG images to WebP format using sharp
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const IMAGES_DIR = path.join(__dirname, '..', 'public', 'images');
let totalOriginal = 0;
let totalConverted = 0;
let count = 0;

function findPngFiles(dir) {
    const results = [];
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            results.push(...findPngFiles(fullPath));
        } else if (entry.name.endsWith('.png')) {
            results.push(fullPath);
        }
    }
    return results;
}

async function convert() {
    const pngFiles = findPngFiles(IMAGES_DIR);
    console.log(`Found ${pngFiles.length} PNG files to convert.\n`);

    for (const pngPath of pngFiles) {
        const webpPath = pngPath.replace('.png', '.webp');
        const originalSize = fs.statSync(pngPath).size;
        totalOriginal += originalSize;

        try {
            await sharp(pngPath)
                .webp({ quality: 80 })
                .toFile(webpPath);

            const newSize = fs.statSync(webpPath).size;
            totalConverted += newSize;
            count++;
            const savings = ((1 - newSize / originalSize) * 100).toFixed(1);
            const rel = path.relative(IMAGES_DIR, pngPath);
            console.log(`✅ ${rel}: ${(originalSize / 1024).toFixed(0)}KB → ${(newSize / 1024).toFixed(0)}KB  (${savings}% saved)`);
        } catch (err) {
            console.error(`❌ Failed: ${pngPath}`, err.message);
        }
    }

    console.log(`\n${'='.repeat(60)}`);
    console.log(`Converted ${count}/${pngFiles.length} files`);
    console.log(`Total: ${(totalOriginal / 1024 / 1024).toFixed(1)}MB → ${(totalConverted / 1024 / 1024).toFixed(1)}MB`);
    console.log(`Savings: ${((1 - totalConverted / totalOriginal) * 100).toFixed(1)}%`);
}

convert();
