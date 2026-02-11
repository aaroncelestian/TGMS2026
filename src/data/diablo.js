// Diablo - Action RPG with gem-socketing mechanics
export const diabloData = {
  gameInfo: {
    name: "Diablo",
    tagline: "Dark fantasy action RPG where gems enhance weapons and armor",
    developer: "Blizzard Entertainment",
    releaseYear: 1996,
    totalMinerals: 7,
    totalSpecimens: 3,
    diversityScore: "Medium",
    gameDescription: "Diablo features 8 different gem types including Amethyst, Diamond, Emerald, Ruby, Sapphire, Topaz, Skull, and their various quality tiers. Gems are socketed into weapons and armor to provide stat bonuses, resistances, and special effects. The gem system is central to character customization and build optimization across the series."
  },
  minerals: [
    {
      id: "yellow-topaz-gem",
      name: "Yellow Topaz",
      formula: "Al₂SiO₄(F,OH)₂",
      specimenId: "51749",
      type: "gem",
      crystalSystem: "Orthorhombic",
      hardness: "8",
      color: "Golden yellow to amber",
      description: "Natural yellow topaz, one of the hardest gemstones. In Diablo, topaz gems are socketed into equipment to provide lightning resistance and magic find bonuses.",
      inGameUse: "Socketable gem for lightning resistance, magic find enhancement",
      realWorldUse: "Gemstone jewelry, November birthstone",
      rarity: "Uncommon",
      locality: "N/A",
      imageUrl: "/TGMS2026/images/diablo/yellow-topaz-gem.jpg",
      funFact: "Imperial topaz (golden yellow to pink) is the most valuable topaz variety and was named after the Russian royal family who claimed exclusive rights to it!"
    },
    {
      id: "sapphire-gem",
      name: "Sapphire",
      formula: "Al₂O₃",
      specimenId: "37438",
      type: "mineral",
      crystalSystem: "Trigonal (Hexagonal)",
      hardness: "9",
      color: "Deep blue",
      description: "Blue variety of corundum, second only to diamond in hardness. In Diablo, sapphires provide cold resistance and are essential for high-level crafting.",
      inGameUse: "Socketable gem for cold resistance, mana boost",
      realWorldUse: "Precious gemstone, watch crystals, scientific instruments",
      rarity: "Rare",
      locality: "N/A",
      imageUrl: "/TGMS2026/images/diablo/sapphire-mineral-2.jpg",
      funFact: "The Star of India, one of the world's largest star sapphires at 563 carats, was stolen from the American Museum of Natural History in 1964 and later recovered!"
    },
    {
      id: "sapphire-mineral-1",
      name: "Sapphire Crystal",
      formula: "Al₂O₃",
      specimenId: "76800",
      type: "mineral",
      crystalSystem: "Trigonal (Hexagonal)",
      hardness: "9",
      color: "Blue hexagonal crystal",
      description: "Natural sapphire crystal showing the hexagonal barrel shape typical of corundum. The blue color comes from trace amounts of iron and titanium.",
      inGameUse: "Raw sapphire, high-value loot",
      realWorldUse: "Museum specimens, source for faceted gems",
      rarity: "Rare",
      locality: "N/A",
      imageUrl: "/TGMS2026/images/diablo/sapphire-mineral-1.jpg",
      funFact: "Sapphires come in every color except red.  When it's red corundum is called ruby! There are pink, yellow, green, and even colorless sapphires."
    }
  ]
};
