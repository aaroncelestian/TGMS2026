// Central export for all game data
import { stardewValleyData } from './stardewValley';
import { minecraftData } from './minecraft';
import { zeldaData } from './zelda';
import { gtaData } from './gta';
import { wowData } from './wow';
import { finalFantasyData } from './finalfantasy';
import { eliteDangerousData } from './elitedangerous';
import { theWitcherData } from './thewitcher';
import { baldursGateData } from './baldursgate';
import { kingdomComeData } from './kingdomcome';
import { diabloData } from './diablo';
import { elderScrollsData } from './elderscrolls';
import { returnToMoriaData } from './returntomoria';
import { dwarfFortressData } from './dwarffortress';
import { astroneerData } from './astroneer';
import { planetCrafterData } from './planetcrafter';

// Export all games as an object
export const allGames = {
  'stardew-valley': stardewValleyData,
  'minecraft': minecraftData,
  'zelda': zeldaData,
  'gta': gtaData,
  'wow': wowData,
  'final-fantasy': finalFantasyData,
  'elite-dangerous': eliteDangerousData,
  'the-witcher': theWitcherData,
  'baldurs-gate': baldursGateData,
  'kingdom-come': kingdomComeData,
  'diablo': diabloData,
  'elder-scrolls': elderScrollsData,
  'return-to-moria': returnToMoriaData,
  'dwarf-fortress': dwarfFortressData,
  'astroneer': astroneerData,
  'planet-crafter': planetCrafterData
};

// Export individual games
export {
  stardewValleyData,
  minecraftData,
  zeldaData,
  gtaData,
  wowData,
  finalFantasyData,
  eliteDangerousData,
  theWitcherData,
  baldursGateData,
  kingdomComeData,
  diabloData,
  elderScrollsData,
  returnToMoriaData,
  dwarfFortressData,
  astroneerData,
  planetCrafterData
};

// Game list for navigation
export const gameList = [
  { id: 'minecraft', name: 'Minecraft', icon: '⛏️', specimens: 7 },
  { id: 'stardew-valley', name: 'Stardew Valley', icon: '🌾', specimens: 7 },
  { id: 'gta', name: 'GTA', icon: '💎', specimens: 5 },
  { id: 'wow', name: 'World of Warcraft', icon: '⚔️', specimens: 5 },
  { id: 'zelda', name: 'The Legend of Zelda', icon: '🗡️', specimens: 2 },
  { id: 'final-fantasy', name: 'Final Fantasy', icon: '✨', specimens: 5 },
  { id: 'elite-dangerous', name: 'Elite Dangerous', icon: '🚀', specimens: 4 },
  { id: 'the-witcher', name: 'The Witcher', icon: '🐺', specimens: 4 },
  { id: 'baldurs-gate', name: "Baldur's Gate", icon: '🎲', specimens: 4 },
  { id: 'kingdom-come', name: 'Kingdom Come: Deliverance', icon: '🏰', specimens: 4 },
  { id: 'diablo', name: 'Diablo', icon: '🔥', specimens: 3 },
  { id: 'elder-scrolls', name: 'The Elder Scrolls', icon: '🐉', specimens: 2 },
  { id: 'return-to-moria', name: 'Return to Moria', icon: '⚒️', specimens: 8 },
  { id: 'dwarf-fortress', name: 'Dwarf Fortress', icon: '🏔️', specimens: 3 },
  { id: 'astroneer', name: 'Astroneer', icon: '🌌', specimens: 4 },
  { id: 'planet-crafter', name: 'The Planet Crafter', icon: '🪐', specimens: 3 }
];
