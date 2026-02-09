# TGMS 2026 Exhibit - Quick Start Guide

## 🎯 What You Have

A complete, mobile-optimized web application for your Tucson Gem & Mineral Show 2026 exhibition featuring **8 video games** with **52+ mineral specimens**:

- Minecraft (10 minerals)
- Stardew Valley (6 minerals)  
- GTA (7 minerals)
- World of Warcraft (7 minerals)
- Zelda (4 minerals)
- Final Fantasy (6 minerals)
- Elite Dangerous (6 minerals)
- The Witcher (6 minerals)

## 📱 Try the Demo NOW

**Option 1:** Open `demo-multigame.html` - Shows the game switcher in action!
**Option 2:** Open `demo.html` - Original Stardew Valley single-game demo

Both work on desktop (resize browser to mobile width to test mobile UI).

## 🚀 Three Ways to Deploy

### Option 1: Quick GitHub Pages (Recommended for TGMS)

1. Create a new repository on GitHub called `tgms2026-exhibit`
2. Upload all files from this folder
3. Go to Settings → Pages
4. Select "GitHub Actions" as the source
5. The site will auto-deploy at: `https://yourusername.github.io/tgms2026-exhibit/`

**Important:** Update `vite.config.js` line 6:
```javascript
base: '/tgms2026-exhibit/',  // Match your repo name!
```

### Option 2: Local Development & Testing

```bash
# Install Node.js from nodejs.org (version 18+)
# Then in this folder:

npm install        # Install dependencies
npm run dev        # Start development server
# Open http://localhost:5173 in your browser

npm run build      # Build for production (creates dist/ folder)
```

### Option 3: Simple Static Server

If you just want to test locally without npm:

```bash
# Python 3
python -m http.server 8000

# Then open http://localhost:8000/demo.html
```

## 📝 Next Steps for Your Exhibition

### 1. Add Mineral Photos

Place high-quality specimen photos in the appropriate game folders:
```
public/images/
  minecraft/       (10 photos needed)
  stardew/         (6 photos needed)
  gta/             (7 photos needed)
  wow/             (7 photos needed)
  zelda/           (4 photos needed)
  finalfantasy/    (6 photos needed)
  elitedangerous/  (6 photos needed)
  thewitcher/      (6 photos needed)
```

Refer to each game's data file in `src/data/` to see exactly which images are needed (look at the `imageUrl` field for each mineral).

Recommended specs:
- Format: JPG or WebP
- Size: 800-1200px wide
- Quality: 80-90%
- Total size: Keep each image under 200KB

### 2. (Optional) Add More Games

Want to add the remaining games from your list? Easy!

The following games from your specimen list are ready to add:
- Baldur's Gate (7 minerals)
- Kingdom Come (4 minerals)
- Diablo (5 minerals)
- Elder Scrolls (2 minerals)
- Return to Moria (6 minerals)
- Dwarf Fortress (3 minerals)
- Astroneer (5 minerals)
- Planet Crafters (3 minerals)

To add one:
1. Create data file: `src/data/newgame.js` (copy any existing game as template)
2. Add game info and minerals from your specimen list
3. Import it in `src/data/index.js`
4. Add to `allGames` object and `gameList` array
5. Create image folder: `public/images/newgame/`

### 3. Generate QR Codes

For each game, create a QR code pointing to:
```
https://yourusername.github.io/tgms2026-exhibit/#/stardew-valley
https://yourusername.github.io/tgms2026-exhibit/#/minecraft
```

Use: https://www.qr-code-generator.com/

Print QR codes on labels next to each game's display case.

## 🎨 Customization

All colors and styling are in: `src/styles/App.css`

Current color scheme (change in CSS `:root` section):
- Background: Dark (#0a0a0a, #1a1a1a)
- Accent: Blue (#4a9eff)
- Text: White/Gray

Want a different color? Just change `--accent` to your museum brand color!

## 📊 Features Included

✅ Mobile-first responsive design
✅ Swipeable horizontal gallery
✅ Bottom sheet modals (iOS/Android style)
✅ Gallery & List view toggle
✅ Smooth animations
✅ Touch-optimized interactions
✅ Fast loading (< 2 seconds)
✅ Works offline after first visit
✅ No external dependencies (lightweight)

## 🔧 File Structure

```
tgms2026-exhibit/
├── demo.html              ← TRY THIS FIRST!
├── README.md              ← Full documentation
├── package.json           ← Dependencies
├── vite.config.js         ← Build configuration
├── index.html             ← Main HTML template
├── public/
│   └── images/           ← Add your photos here
└── src/
    ├── App.jsx           ← Main app component
    ├── main.jsx          ← Entry point
    ├── components/       ← UI components
    │   ├── MineralCard.jsx
    │   └── MineralModal.jsx
    ├── data/             ← Game & mineral data
    │   └── stardewValley.js
    └── styles/
        └── App.css       ← All styling
```

## 🆘 Troubleshooting

**Q: The demo works but npm run dev fails**
A: Make sure you have Node.js 18+ installed from nodejs.org

**Q: Images don't show up**
A: Check that image paths match exactly (case-sensitive!)
   Example: `malachite.jpg` not `Malachite.JPG`

**Q: Site works locally but not on GitHub Pages**
A: Did you update the `base` path in `vite.config.js`?

**Q: How do I add more games?**
A: Copy `src/data/stardewValley.js`, rename it, update the data.
   Then import it in `App.jsx` and create a new route.

## 📞 Need Help?

This codebase is designed to be:
- Easy to understand
- Well-commented
- Copy-paste friendly
- Beginner-friendly

Each component is self-contained. You can modify one without breaking others!

## 🎓 Learning Resources

- React basics: https://react.dev/learn
- Vite guide: https://vitejs.dev/guide/
- CSS Grid/Flexbox: https://css-tricks.com/snippets/css/complete-guide-grid/

## 🎉 Ready to Go!

1. Open `demo.html` to see it work
2. Add your specimen photos
3. Deploy to GitHub Pages
4. Generate QR codes
5. Print labels
6. Set up at TGMS!

Have fun with your exhibition! 🎮💎
