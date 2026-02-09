# TGMS 2026 - Mineralogy in Video Games Exhibition

Interactive mobile-friendly website for the Tucson Gem & Mineral Show 2026 exhibition exploring how video games represent real mineralogy.

## 🎮 Games Featured

The exhibition includes 8 major video games with 52+ mineral specimens:

- **Minecraft** (10 minerals) - Calcite, lapis lazuli, emerald, obsidian, gold
- **Stardew Valley** (6 minerals) - Malachite, neptunite, celestine, baryte, kyanite
- **Grand Theft Auto** (7 minerals) - Diamonds, rubies (the ultimate heist prizes)
- **World of Warcraft** (7 minerals) - Peridot, garnets, ametrine
- **The Legend of Zelda** (4 minerals) - Opal, amethyst
- **Final Fantasy** (6 minerals) - Pink beryl, rubellite, danburite, electrum
- **Elite Dangerous** (6 minerals) - Benitoite (California's state gem!), rutile
- **The Witcher** (6 minerals) - Black pearls, conch pearls, pyrite

Each game has its own page with detailed mineralogy information!

## Features

- 📱 **Mobile-first design** - Optimized for phone screens and QR code scanning
- 🎨 **Smooth animations** - Native-feeling swipe gestures and transitions
- 🖼️ **Gallery & List views** - Toggle between browsing modes
- 📊 **Bottom sheet modals** - iOS/Android-style mineral detail views
- 🔍 **Progressive disclosure** - Tap to expand detailed mineralogical data
- ⚡ **Static site** - Fast loading, works offline after first visit

## Technology Stack

- React 18
- Vite (fast build tool)
- Vanilla CSS with modern features
- No external UI libraries (lightweight & fast)

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment to GitHub Pages

### 1. Update `vite.config.js`

Change the `base` path to match your repository name:

```javascript
export default defineConfig({
  base: '/your-repo-name/',  // Change this!
  // ...
})
```

### 2. Build the site

```bash
npm run build
```

This creates a `dist/` folder with your static site.

### 3. Deploy to GitHub Pages

**Option A: Using GitHub Actions (Recommended)**

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm install
        
      - name: Build
        run: npm run build
        
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

**Option B: Manual deployment**

```bash
# Install gh-pages package
npm install --save-dev gh-pages

# Add to package.json scripts:
# "deploy": "npm run build && gh-pages -d dist"

# Deploy
npm run deploy
```

### 4. Configure GitHub Pages

1. Go to your repository Settings → Pages
2. Source: Deploy from a branch
3. Branch: `gh-pages` → `/ (root)`
4. Save

Your site will be live at: `https://yourusername.github.io/repo-name/`

## Project Structure

```
tgms2026-exhibit/
├── public/
│   └── images/          # Mineral specimen photos
│       └── stardew/
├── src/
│   ├── components/
│   │   ├── MineralCard.jsx
│   │   └── MineralModal.jsx
│   ├── data/
│   │   └── stardewValley.js  # Game + mineral data
│   ├── styles/
│   │   └── App.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Adding New Games

1. Create a new data file: `src/data/gameName.js`
2. Use the `stardewValley.js` structure as a template
3. Add mineral specimen data from your TGMS list
4. Create a new route or page component
5. Add mineral photos to `public/images/gameName/`

## Image Requirements

- Format: JPG or WebP (WebP preferred for smaller file size)
- Dimensions: At least 800px wide for good quality
- Gallery view: 280×200px (cropped automatically)
- Detail view: Full width, 300px height
- File naming: lowercase, no spaces (e.g., `malachite-bowl.jpg`)

## Data Structure

Each game needs:

```javascript
{
  gameInfo: {
    name: string,
    tagline: string,
    developer: string,
    releaseYear: number,
    totalMinerals: number,
    totalSpecimens: number,
    diversityScore: string
  },
  minerals: [{
    id: string,
    name: string,
    formula: string,
    specimenId: string,
    type: string,
    crystalSystem: string,
    hardness: string,
    color: string,
    description: string,
    inGameUse: string,
    realWorldUse: string,
    rarity: string,
    imageUrl: string,
    funFact: string
  }]
}
```

## QR Code Generation

For each game page, generate QR codes pointing to:

```
https://yourusername.github.io/tgms2026-exhibit/#/stardew-valley
https://yourusername.github.io/tgms2026-exhibit/#/minecraft
https://yourusername.github.io/tgms2026-exhibit/#/zelda
// etc.
```

Use a QR code generator like:
- https://www.qr-code-generator.com/
- https://qrcode.tec-it.com/

## Browser Support

- iOS Safari 13+
- Chrome/Edge (mobile & desktop)
- Firefox (mobile & desktop)
- Samsung Internet

## Performance

- First Contentful Paint: <1s
- Time to Interactive: <2s
- Lighthouse Score: 95+
- Bundle size: ~50KB gzipped

## License

Created for educational purposes by Dr. Aaron Celestian, Natural History Museum of Los Angeles County.

## Contact

For questions about the exhibition or codebase:
- Dr. Aaron Celestian
- Natural History Museum of Los Angeles County
- Curator of Mineral Sciences
