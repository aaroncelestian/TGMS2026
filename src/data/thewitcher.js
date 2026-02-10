// The Witcher - CD Projekt RED's dark fantasy RPG
export const theWitcherData = {
  gameInfo: {
    name: "The Witcher",
    tagline: "Dark fantasy RPG with unique pearl collection mechanics",
    developer: "CD Projekt Red",
    releaseYear: 2007,
    totalMinerals: 24,
    totalSpecimens: 4,
    diversityScore: "High",
    gameDescription: "The Witcher 3 features approximately 24 alchemy minerals including Phosphorus, Sulfur, Quicksilver, and Saltpeter. These materials are gathered from the environment and monster loot, used primarily in alchemy for crafting potions, oils, and bombs. The game also includes a unique pearl collection system with various rare pearls found in coastal areas."
  },
  minerals: [
    {
      id: "pearl-black",
      name: "Black Pearl",
      formula: "CaCO₃ (biogenic)",
      specimenId: "44229",
      type: "gem",
      crystalSystem: "Aragonite/Calcite (organic)",
      hardness: "2.5-4.5",
      color: "Black, dark gray",
      description: "Organic gem produced by mollusks, colored by dark organic compounds. Natural black pearls are extremely rare, mainly from Tahiti. In The Witcher, pearls are valuable crafting components and currency.",
      inGameUse: "Alchemy ingredients, crafting materials, valuable trade goods",
      realWorldUse: "Luxury jewelry, particularly Tahitian black pearls",
      rarity: "Very Rare",
      imageUrl: "/TGMS2026/images/the-witcher/pearl-black.jpg",
      funFact: "Natural black pearls can sell for $10,000-$20,000! Most 'black pearls' in jewelry are actually dyed."
    },
    {
      id: "pearl-white-blister",
      name: "Pearl (White Blister)",
      formula: "CaCO₃ (biogenic)",
      specimenId: "40914",
      type: "gem",
      crystalSystem: "Aragonite/Calcite (organic)",
      hardness: "2.5-4.5",
      color: "White, dome-shaped",
      description: "Blister pearl that formed attached to the mollusk's shell rather than free-floating. These pearls have a flat back and domed front. Often used in mabe pearl jewelry.",
      inGameUse: "Alchemy reagent, equipment upgrade material",
      realWorldUse: "Mabe pearl jewelry, decorative inlay",
      rarity: "Uncommon",
      imageUrl: "/TGMS2026/images/the-witcher/pearl-white-blister.jpg",
      funFact: "Cleopatra supposedly dissolved a pearl in wine and drank it to prove Egypt's wealth to Marc Antony!"
    },
    {
      id: "pearl-abalone",
      name: "Pearl (Abalone Tooth)",
      formula: "CaCO₃ (biogenic)",
      specimenId: "40925",
      type: "gem",
      crystalSystem: "Aragonite/Calcite (organic)",
      hardness: "2.5-4.5",
      color: "Iridescent blue-green-purple",
      description: "Pearl from abalone mollusk showing spectacular iridescent colors. Abalone pearls are extremely rare (1 in 100,000 abalone) and display colors matching the interior of abalone shells.",
      inGameUse: "Legendary crafting material, highest-tier alchemy ingredient",
      realWorldUse: "Ultra-rare collector gems, museum specimens",
      rarity: "Very Rare",
      imageUrl: "/TGMS2026/images/the-witcher/pearl-abalone.jpg",
      funFact: "Abalone pearls can show blue, green, purple, pink, and silver simultaneously! A large one can be worth $100,000+."
    },
    {
      id: "pyrite",
      name: "Pyrite",
      formula: "FeS₂",
      specimenId: "21807",
      type: "mineral",
      crystalSystem: "Cubic",
      hardness: "6-6.5",
      color: "Metallic brass-yellow",
      description: "Iron sulfide known as 'Fool's Gold' for its deceptive metallic golden color. Forms perfect cubic crystals. In The Witcher, pyrite is a common but useful crafting material.",
      inGameUse: "Basic crafting component, blacksmithing material",
      realWorldUse: "Sulfuric acid production, iron ore (historically), decorative specimens",
      rarity: "Very Common",
      imageUrl: "/TGMS2026/images/the-witcher/pyrite.jpg",
      funFact: "Pyrite's name comes from Greek 'pyr' (fire) because it sparks when struck! It fooled many gold prospectors."
    }
  ]
};
