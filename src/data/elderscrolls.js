// The Elder Scrolls - Epic fantasy RPG series
export const elderScrollsData = {
  gameInfo: {
    name: "The Elder Scrolls",
    tagline: "Open-world fantasy RPG with mining and smithing mechanics",
    developer: "Bethesda Game Studios",
    releaseYear: 1994,
    totalMinerals: 15,
    totalSpecimens: 2,
    diversityScore: "High",
    gameDescription: "The Elder Scrolls Online features 15 different minerals and ores including Iron, Orichalcum, Dwarven materials, Adamantite, and Rubedite. Players mine ore nodes throughout Tamriel to gather materials for smithing weapons, armor, and jewelry. The game's crafting system allows for extensive customization using these gathered minerals."
  },
  minerals: [
    {
      id: "red-garnet-gem",
      name: "Red Garnet",
      formula: "Fe₃Al₂(SiO₄)₃",
      specimenId: "24408",
      type: "gem",
      crystalSystem: "Cubic",
      hardness: "7-7.5",
      color: "Deep red",
      description: "Almandine garnet, the most common red garnet variety. In The Elder Scrolls series, garnets are valuable gems used in jewelry crafting and alchemy.",
      inGameUse: "Jewelry crafting, alchemy ingredient, valuable trade good",
      realWorldUse: "Gemstone jewelry, abrasives, water filtration media",
      rarity: "Common",
      imageUrl: "/images/elderscrolls/red-garnet-gem.jpg",
      funFact: "The name 'garnet' comes from the Latin 'granatum' meaning pomegranate, because the crystals resemble pomegranate seeds!"
    },
    {
      id: "red-garnet-mineral",
      name: "Red Garnet Crystal",
      formula: "Fe₃Al₂(SiO₄)₃",
      specimenId: "8639",
      type: "mineral",
      crystalSystem: "Cubic",
      hardness: "7-7.5",
      color: "Red dodecahedral crystal",
      description: "Natural garnet crystal showing the characteristic dodecahedral (12-sided) form. Garnets form in metamorphic rocks under high pressure and temperature.",
      inGameUse: "Raw garnet ore, mining loot, smithing material",
      realWorldUse: "Mineral specimens, industrial abrasives, gemstone source",
      rarity: "Common",
      imageUrl: "/images/elderscrolls/red-garnet-mineral.jpg",
      funFact: "Garnets are actually a group of over 20 different minerals! They all share the same crystal structure but have different chemical compositions."
    }
  ]
};
