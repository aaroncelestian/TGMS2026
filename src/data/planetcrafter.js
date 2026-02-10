// The Planet Crafter - Space survival terraforming game
export const planetCrafterData = {
  gameInfo: {
    name: "The Planet Crafter",
    tagline: "Terraform a barren planet into an Earth-like paradise through mining and resource management",
    developer: "Miju Games",
    releaseYear: 2022,
    totalMinerals: 13,
    totalSpecimens: 3,
    diversityScore: "High",
    gameDescription: "The Planet Crafter is a first-person space survival game where you terraform an uninhabitable planet. The core gameplay centers on mining 13 different ores and crafting machines to gradually transform the hostile environment. Zeolite is the most unique mineral - locked behind terraformation progress and critical for late-game DNA manipulation and gas extraction systems."
  },
  minerals: [
    {
      id: "natrolite-gem",
      name: "Natrolite",
      formula: "Na₂Al₂Si₃O₁₀·2H₂O",
      specimenId: "23925",
      type: "gem",
      crystalSystem: "Orthorhombic",
      hardness: "5-5.5",
      color: "Colorless, white, sometimes yellowish",
      description: "A zeolite mineral forming fibrous, radiating needle-like crystals. Natrolite represents the zeolite family in the game's Zeolite Cave, where massive white crystalline formations dominate the landscape.",
      inGameUse: "Zeolite ore for DNA Manipulators, Gas Extractors, and Pulsar Quartz crafting",
      realWorldUse: "Water purification, ion exchange, catalysis, molecular sieves",
      rarity: "Uncommon",
      locality: "N/A",
      imageUrl: "/TGMS2026/images/planet-crafter/natrolite-gem.jpg",
      funFact: "In The Planet Crafter, zeolite emerges from the ground when trees grow - pushed up by roots in a beautiful mechanic that ties mineralogy to biological growth!"
    },
    {
      id: "heulandite-rock",
      name: "Heulandite (with Quartz in Basalt)",
      formula: "(Ca,Na)₂₋₃Al₃(Al,Si)₂Si₁₃O₃₆·12H₂O",
      specimenId: "76597",
      type: "rock",
      crystalSystem: "Monoclinic",
      hardness: "3.5-4",
      color: "White, colorless, pink, red, brown",
      description: "One of the most common zeolite minerals, forming distinctive coffin-shaped crystals. This specimen shows black heulandite with quartz in basalt matrix - the typical volcanic cavity environment where zeolites form.",
      inGameUse: "Represents the geological context of zeolite formation in volcanic caves",
      realWorldUse: "Radiation shielding, ion exchange, molecular sieves, nuclear cleanup",
      rarity: "Uncommon",
      locality: "N/A",
      imageUrl: "/TGMS2026/images/planet-crafter/heulandite-rock.jpg",
      funFact: "Heulandite loses 10% of its weight when heated to 350°C as water evaporates from its channels! The basalt connection is perfect for terraforming - basaltic volcanism is common on rocky planets."
    },
    {
      id: "stellerite-rock",
      name: "Stellerite (in Basalt)",
      formula: "Ca₄(Si₂₈Al₈)O₇₂·28H₂O",
      specimenId: "54359",
      type: "rock",
      crystalSystem: "Orthorhombic",
      hardness: "3.5-4",
      color: "White, colorless, pale yellow, pink",
      description: "A calcium-rich zeolite forming distinctive fan-shaped or wheat-sheaf crystal aggregates. Represents the diversity within the zeolite family - all form in volcanic environments with similar chemistry but varied crystal forms.",
      inGameUse: "Shows zeolite diversity - the game correctly associates zeolites with gas separation and molecular manipulation",
      realWorldUse: "Molecular sieves, catalysis, ion exchange, collector specimens",
      rarity: "Rare",
      locality: "N/A",
      imageUrl: "/TGMS2026/images/planet-crafter/stellerite-rock.jpg",
      funFact: "Stellerite can contain up to 28 water molecules per formula unit - nearly half its weight is water! The game's zeolite appearing during Flora stage creates a poetic connection - stellerite looks like wheat."
    }
  ]
};
