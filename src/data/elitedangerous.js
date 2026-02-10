// Elite Dangerous - Space exploration and mining simulation
export const eliteDangerousData = {
  gameInfo: {
    name: "Elite Dangerous",
    tagline: "Space mining simulation with realistic asteroid geology",
    developer: "Frontier Developments",
    releaseYear: 2014,
    totalMinerals: 33,
    totalSpecimens: 4,
    diversityScore: "High",
    gameDescription: "Elite Dangerous features 33 distinct mineral commodities that can be mined from asteroids and planetary rings. Players use specialized mining equipment to extract valuable materials like Painite, Void Opals, and Low Temperature Diamonds. Mining is a core profession in the game's economy, with minerals used for trading, crafting, and engineering ship upgrades."
  },
  minerals: [
    {
      id: "benitoite-gem-1",
      name: "Benitoite",
      formula: "BaTiSi₃O₉",
      specimenId: "13791",
      type: "gem",
      crystalSystem: "Hexagonal",
      hardness: "6-6.5",
      color: "Blue, colorless",
      description: "Rare barium titanium silicate, the official state gem of California. Found in only a few locations worldwide, primarily San Benito County, California. Shows strong blue fluorescence under UV light.",
      inGameUse: "Rare material for high-tech station construction, valuable trade commodity",
      realWorldUse: "Rare collector gemstone, almost exclusively from California",
      rarity: "Very Rare",
      locality: "N/A",
      imageUrl: "/TGMS2026/images/elite-dangerous/benitoite-gem-1.jpg",
      funFact: "Benitoite is rarer than diamond! Gem-quality material comes almost exclusively from one mine in California."
    },
    {
      id: "benitoite-rock",
      name: "Benitoite in Natrolite",
      formula: "BaTiSi₃O₉ in Na₂Al₂Si₃O₁₀·2H₂O",
      specimenId: "22245",
      type: "rock",
      crystalSystem: "Hexagonal in fibrous matrix",
      hardness: "6-6.5",
      color: "Blue crystals in white matrix",
      description: "Benitoite crystals in natrolite (a zeolite mineral). This is the typical occurrence - benitoite forms in veins with serpentine, natrolite, and neptunite. The white natrolite makes the blue benitoite stand out dramatically.",
      inGameUse: "Asteroid mineral composition, shows authentic geology",
      realWorldUse: "Collector specimens showing natural occurrence",
      rarity: "Rare",
      locality: "N/A",
      imageUrl: "/TGMS2026/images/elite-dangerous/benitoite-rock.jpg",
      funFact: "The blue benitoite, white natrolite, and neptunite (which shows reddish colors under bright light) together are sometimes called 'patriotic minerals' for their red, white, and blue colors!"
    },
    {
      id: "rutile-synthetic",
      name: "Rutile (Synthetic)",
      formula: "TiO₂",
      specimenId: "8203",
      type: "gem",
      crystalSystem: "Tetragonal",
      hardness: "6-6.5",
      color: "Various (synthetic)",
      description: "Synthetic titanium dioxide grown for industrial and decorative use. Natural rutile is typically red-brown, but synthetic versions can be made in many colors. Has higher dispersion (fire) than diamond.",
      inGameUse: "Manufactured station component, synthetic material production",
      realWorldUse: "Diamond simulant (before cubic zirconia), optical coatings, pigment",
      rarity: "Common (synthetic)",
      locality: "N/A",
      imageUrl: "/TGMS2026/images/elite-dangerous/rutile-synthetic.jpg",
      funFact: "Synthetic rutile was used as a diamond substitute in the 1940s-50s but has 6x the 'fire' of diamond, making it look fake!"
    },
    {
      id: "rutile-mineral",
      name: "Rutile (Natural Crystal)",
      formula: "TiO₂",
      specimenId: "19705",
      type: "mineral",
      crystalSystem: "Tetragonal",
      hardness: "6-6.5",
      color: "Dark red to black",
      description: "Natural rutile crystal showing metallic luster. Rutile is the primary ore of titanium, the 9th most abundant element in Earth's crust. Essential for aerospace alloys and white pigment.",
      inGameUse: "Titanium extraction source for ship hulls and station construction",
      realWorldUse: "Titanium ore, pigment production (TiO₂ white paint), welding rod coatings",
      rarity: "Common",
      locality: "N/A",
      imageUrl: "/TGMS2026/images/elite-dangerous/rutile-mineral.jpg",
      funFact: "Almost all modern white paint uses titanium dioxide from rutile. It's the whitest, brightest pigment known!"
    }
  ]
};
