const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Import all game data to get specimen IDs
const dataFiles = [
  './src/data/minecraft.js',
  './src/data/stardewValley.js',
  './src/data/gta.js',
  './src/data/wow.js',
  './src/data/zelda.js',
  './src/data/finalfantasy.js',
  './src/data/elitedangerous.js',
  './src/data/thewitcher.js',
  './src/data/baldursgate.js',
  './src/data/kingdomcome.js',
  './src/data/diablo.js',
  './src/data/elderscrolls.js',
  './src/data/returntomoria.js',
  './src/data/dwarffortress.js',
  './src/data/astroneer.js'
];

// Map of specimen ID to game and mineral info
const specimenMap = {};

dataFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  
  // Extract game ID from filename
  const gameId = path.basename(file, '.js');
  
  // Extract all specimen IDs and mineral names
  const mineralMatches = content.matchAll(/{\s*id: "([^"]+)"[^}]*name: "([^"]+)"[^}]*specimenId: "([^"]+)"/gs);
  
  for (const match of mineralMatches) {
    const [, mineralId, mineralName, specimenId] = match;
    specimenMap[specimenId] = {
      gameId,
      mineralId,
      mineralName
    };
  }
});

// Get all images from RawImages folder
const rawImagesDir = './RawImages';
const imageFiles = fs.readdirSync(rawImagesDir).filter(f => 
  /\.(jpg|jpeg|png|heic)$/i.test(f)
);

console.log(`Found ${imageFiles.length} images in RawImages folder`);
console.log(`Found ${Object.keys(specimenMap).length} specimen IDs in data files\n`);

// Match images to specimens
const matches = [];
const unmatched = [];

imageFiles.forEach(filename => {
  // Extract catalog number from filename
  const catalogMatch = filename.match(/^(\d+)/);
  
  if (catalogMatch) {
    const catalogNum = catalogMatch[1];
    
    if (specimenMap[catalogNum]) {
      matches.push({
        filename,
        catalogNum,
        ...specimenMap[catalogNum]
      });
    } else {
      unmatched.push({ filename, catalogNum, reason: 'Catalog number not in data' });
    }
  } else if (filename.toLowerCase().includes('citrine') && filename.toLowerCase().includes('xtl')) {
    // Special case for citrine crystal
    const citrineSpec = Object.entries(specimenMap).find(([id, data]) => 
      data.mineralName.toLowerCase().includes('citrine') && 
      data.mineralName.toLowerCase().includes('crystal')
    );
    
    if (citrineSpec) {
      matches.push({
        filename,
        catalogNum: citrineSpec[0],
        ...citrineSpec[1]
      });
    } else {
      unmatched.push({ filename, reason: 'Citrine crystal not found in data' });
    }
  } else {
    unmatched.push({ filename, reason: 'No catalog number in filename' });
  }
});

console.log('=== MATCHED IMAGES ===');
matches.forEach(m => {
  console.log(`${m.filename} -> ${m.gameId}/${m.mineralId} (${m.mineralName}, #${m.catalogNum})`);
});

console.log(`\n=== UNMATCHED IMAGES (${unmatched.length}) ===`);
unmatched.forEach(u => {
  console.log(`${u.filename} - ${u.reason}${u.catalogNum ? ` (#${u.catalogNum})` : ''}`);
});

// Create output directory structure
const publicImagesDir = './public/images';
if (!fs.existsSync(publicImagesDir)) {
  fs.mkdirSync(publicImagesDir, { recursive: true });
}

// Check if sips (macOS image tool) is available
let hasSips = false;
try {
  execSync('which sips', { stdio: 'ignore' });
  hasSips = true;
  console.log('\n✓ Using macOS sips for image compression');
} catch (e) {
  console.log('\n⚠ sips not found, will copy images without compression');
}

console.log('\n=== PROCESSING IMAGES ===');

matches.forEach(match => {
  const gameDir = path.join(publicImagesDir, match.gameId);
  if (!fs.existsSync(gameDir)) {
    fs.mkdirSync(gameDir, { recursive: true });
  }
  
  const sourcePath = path.join(rawImagesDir, match.filename);
  const ext = path.extname(match.filename).toLowerCase();
  const outputFilename = `${match.mineralId}${ext === '.heic' ? '.jpg' : ext}`;
  const outputPath = path.join(gameDir, outputFilename);
  
  try {
    if (hasSips && (ext === '.jpg' || ext === '.jpeg' || ext === '.png' || ext === '.heic')) {
      // Use sips to compress and resize
      // Convert HEIC to JPG, resize to max 1200px width, compress quality to 85%
      const tempPath = ext === '.heic' ? outputPath : sourcePath;
      
      if (ext === '.heic') {
        execSync(`sips -s format jpeg "${sourcePath}" --out "${tempPath}"`, { stdio: 'ignore' });
      }
      
      execSync(`sips -Z 1200 "${tempPath}" --out "${outputPath}"`, { stdio: 'ignore' });
      execSync(`sips -s formatOptions 85 "${outputPath}"`, { stdio: 'ignore' });
      
      const originalSize = fs.statSync(sourcePath).size;
      const compressedSize = fs.statSync(outputPath).size;
      const reduction = ((1 - compressedSize / originalSize) * 100).toFixed(1);
      
      console.log(`✓ ${match.filename} -> ${match.gameId}/${outputFilename} (${reduction}% smaller)`);
    } else {
      // Just copy the file
      fs.copyFileSync(sourcePath, outputPath);
      console.log(`✓ ${match.filename} -> ${match.gameId}/${outputFilename} (copied)`);
    }
  } catch (error) {
    console.error(`✗ Error processing ${match.filename}: ${error.message}`);
  }
});

console.log('\n=== SUMMARY ===');
console.log(`Processed: ${matches.length} images`);
console.log(`Unmatched: ${unmatched.length} images`);
console.log(`\nImages saved to: ${publicImagesDir}`);
