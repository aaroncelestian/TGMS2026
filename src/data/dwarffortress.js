// Dwarf Fortress - Complex simulation game with detailed geology
export const dwarfFortressData = {
  gameInfo: {
    name: "Dwarf Fortress",
    tagline: "Legendary colony simulator with the most detailed geology in gaming",
    developer: "Bay 12 Games",
    releaseYear: 2006,
    totalMinerals: 200,
    totalSpecimens: 3,
    diversityScore: "Exceptional",
    gameDescription: "Dwarf Fortress simulates over 200 different stones and ores, including approximately 40 economic ores and 150+ types of stone layers. This legendary game features the most realistic and detailed geology system in gaming, with minerals used for construction, metalworking, gem cutting, and trade. Each stone type has unique properties affecting fortress design and industry."
  },
  minerals: [
    {
      id: "quartz-gem",
      name: "Rock Crystal (Quartz)",
      formula: "SiO₂",
      specimenId: "23608",
      type: "gem",
      crystalSystem: "Trigonal (Hexagonal)",
      hardness: "7",
      color: "Clear, colorless",
      description: "Pure, colorless quartz crystal, also called rock crystal. In Dwarf Fortress, quartz is one of many minerals with realistic geological properties and uses.",
      inGameUse: "Glass-making, gem cutting, decorative stone, trade good",
      realWorldUse: "Optical instruments, electronics (oscillators), gemstone",
      rarity: "Common",
      locality: "N/A",
      imageUrl: "/TGMS2026/images/dwarf-fortress/quartz-gem.jpg",
      funFact: "Ancient civilizations believed rock crystal was ice frozen so hard it would never melt! The word 'crystal' comes from the Greek 'krystallos' meaning ice."
    },
    {
      id: "quartz-mineral",
      name: "Quartz Crystal Cluster",
      formula: "SiO₂",
      specimenId: "45196",
      type: "mineral",
      crystalSystem: "Trigonal (Hexagonal)",
      hardness: "7",
      color: "Clear hexagonal crystals",
      description: "Natural quartz crystal cluster showing the characteristic hexagonal prisms with pyramidal terminations. Quartz is the second most abundant mineral in Earth's crust.",
      inGameUse: "Raw quartz, mining yield, fortress decoration",
      realWorldUse: "Mineral specimens, source for industrial quartz",
      rarity: "Very Common",
      locality: "N/A",
      imageUrl: "/TGMS2026/images/dwarf-fortress/quartz-mineral.jpg",
      funFact: "Quartz makes up about 12% of Earth's land surface! It's found in almost every geological environment and rock type."
    },
    {
      id: "serpentine-rock",
      name: "Serpentine",
      formula: "(Mg,Fe)₃Si₂O₅(OH)₄",
      specimenId: "52415",
      type: "rock",
      crystalSystem: "Monoclinic",
      hardness: "2.5-5.5",
      color: "Green with mottled pattern",
      description: "Hydrous magnesium silicate with a characteristic snake-skin appearance. In Dwarf Fortress, serpentine is valued for its workability and attractive green color.",
      inGameUse: "Building stone, decorative material, carving medium",
      realWorldUse: "Ornamental stone, asbestos source (chrysotile variety), architectural material",
      rarity: "Common",
      locality: "N/A",
      imageUrl: "/TGMS2026/images/dwarf-fortress/serpentine-rock.jpg",
      funFact: "Serpentine is California's state rock! It forms when oceanic crust is altered by water, and it's often found in areas with tectonic activity."
    }
  ]
};
