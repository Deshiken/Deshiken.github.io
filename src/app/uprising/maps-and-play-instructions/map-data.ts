export interface MapData {
  mapName: UprisingMapName,
  image: string,
  description: string,
  numberOfPlayers: number,
  objective: UprisingMapObjective,
  specialRules?: Array<string>,
  variants?: Array<UprisingMapObjective>,
}

export enum UprisingMapObjective {
  PointControl = 'Point Control',
  CaptureTheFlag = 'Capture The Flag',
  Survival = 'Survival',
  Conquest = 'Conquest',
  Slayer = 'Slayer',
  Custom = 'Custom',
}

export enum UprisingMapName {
  // 2 Player Maps
  TwoPlayerStandard = 'Two Player Standard',
  DivideAndConquer = 'Divide And Conquer',
  // 3 Player Maps
  FortressDefense = 'Fortress Defense',
  // 4 Player Maps
  FourPlayerStandard = 'Four Player Standard',
  Colosseum = 'Colosseum',
  CloseQuarters = 'Close Quarters',
  HourGlass = 'Hour Glass',
  BreathingRoom = 'Breathing Room',
  TheFly = 'The Fly',
  GreatSacrifice = 'Great Sacrifice',
  TheWildHunt = 'The Wild Hunt',
}

export const UprisingMaps: Map<UprisingMapName, MapData> = new Map([
  // 4 Player Maps
  [UprisingMapName.FourPlayerStandard, {
    mapName: UprisingMapName.FourPlayerStandard,
    image: '../../../assets/uprising_maps_v2/Standard_4Player_v1_Tavern.jpg',
    description: 'The recomended map for starting players. This map gives a balanced experience for the majority of factions.',
    numberOfPlayers: 4,
    objective: UprisingMapObjective.PointControl,
    variants: [UprisingMapObjective.Conquest, UprisingMapObjective.Slayer]
  }],
  [UprisingMapName.Colosseum, {
    mapName: UprisingMapName.Colosseum,
    image: '../../../assets/uprising_maps_v2/Colosseum_4Player_v1_Tavern.jpg',
    description: 'A 2vs2 map placing teammates close to one another but also enemies within striking distance of your capitol.',
    numberOfPlayers: 4,
    objective: UprisingMapObjective.PointControl,
    variants: [UprisingMapObjective.Conquest, UprisingMapObjective.Slayer]
  }],
  [UprisingMapName.CloseQuarters, {
    mapName: UprisingMapName.CloseQuarters,
    image: '../../../assets/uprising_maps_v2/CloseQuarters_4Player_v1_Tavern.jpg',
    description: 'A 2vs2 map placing teammates close to one another but also enemies within striking distance of your capitol.',
    numberOfPlayers: 4,
    objective: UprisingMapObjective.PointControl,
    variants: [UprisingMapObjective.Conquest, UprisingMapObjective.Slayer]
  }],
  [UprisingMapName.HourGlass, {
    mapName: UprisingMapName.HourGlass,
    image: '../../../assets/uprising_maps_v2/HourGlass_4Player_v1_Tavern.jpg',
    description: 'This map features a seperate island that is only accessable through use of a portal. Control of this island is vital in order to obtain enough points to win, but be carful not to spread your forces too thin.',
    numberOfPlayers: 4,
    objective: UprisingMapObjective.PointControl,
    variants: [UprisingMapObjective.Conquest, UprisingMapObjective.Slayer]
  }],
  [UprisingMapName.BreathingRoom, {
    mapName: UprisingMapName.BreathingRoom,
    image: '../../../assets/uprising_maps_v2/BreathingRoom_4Player_v1_Tavern.jpg',
    description: 'This map is sure to see fast and early combat as each player is only a move or two away from each other. Player capitols are moved to the interior of the map with a central flag to fight for control of while other objectives are located around the maps perimeter.',
    numberOfPlayers: 4,
    objective: UprisingMapObjective.PointControl,
    variants: [UprisingMapObjective.Conquest, UprisingMapObjective.Slayer]
  }],
  [UprisingMapName.TheFly, {
    mapName: UprisingMapName.TheFly,
    image: '../../../assets/uprising_maps_v2/TheFly_4Player_v1_Tavern.jpg',
    description: 'This map is sure to see fast and early combat as each player is only a move or two away from each other. Player capitols are moved to the interior of the map with a central flag to fight for control of while other objectives are located around the maps perimeter.',
    numberOfPlayers: 4,
    objective: UprisingMapObjective.PointControl,
    variants: [UprisingMapObjective.Conquest, UprisingMapObjective.Slayer]
  }],
  [UprisingMapName.GreatSacrifice, {
    mapName: UprisingMapName.GreatSacrifice,
    image: '../../../assets/uprising_maps_v2/GreatSacrifice_4Player_v1_Tavern.jpg',
    description: 'Points on this map are not earned by controling flags, but by sacrificing units on specific points on the map.',
    numberOfPlayers: 4,
    specialRules: [
      'To earn a point on this map, you must destroy a unit you control that is in the same region as one of the green flags at the start of your turn',
      'You do not need to control the region of the green flag to destroy a unit you control in that region.'
    ],
    objective: UprisingMapObjective.Custom,
  }],
  [UprisingMapName.TheWildHunt, {
    mapName: UprisingMapName.TheWildHunt,
    image: '../../../assets/uprising_maps_v2/TheWildHunt_4Player_v1_Tavern.jpg',
    description: 'Points on this map are scored by destroying a beast that spawns at a random location. Each time it is destroyed it comes back stronger.',
    specialRules: [
      'For this game mode, points are scored by destroying a Wild Beast, that spawns at a random location on the map.',
      'At the start of the game roll a six sided die. Add the wild beast (using any token) to the green flag matching the number that was rolled.',
      'The beast attacks and defends with a green die. Any time the beast is attacked, it will perform an attack regardless if it is destroyed in the attack or not.',
      'When the beast attacks, it attacks the units attacking it, not a specific region or army.',
      'Each time the beast is destroyed it will spawn again using the same method used to place it at the start of the game.',
      'Keep track of the number of times the beast is destroyed. Each time the beast is destroyed it gains an additional green attack and defense die to a maximum of 4 green dice.'
    ],
    numberOfPlayers: 4,
    objective: UprisingMapObjective.Custom,
  }],
  // 3 Player Maps
  [UprisingMapName.FortressDefense, {
    mapName: UprisingMapName.FortressDefense,
    image: '../../../assets/uprising_maps_v2/Fortress_3Player_v1_Tavern.jpg',
    description: '',
    numberOfPlayers: 3,
    objective: UprisingMapObjective.Survival,
    variants: [UprisingMapObjective.Conquest, UprisingMapObjective.Slayer]
  }],
  // 2 Player Maps
  [UprisingMapName.TwoPlayerStandard, {
    mapName: UprisingMapName.TwoPlayerStandard,
    image: '../../../assets/uprising_maps_v2/Standard_2Player_v1_Tavern.jpg',
    description: 'Standard map for 1vs1 match.',
    numberOfPlayers: 2,
    objective: UprisingMapObjective.PointControl,
    variants: [UprisingMapObjective.Conquest, UprisingMapObjective.Slayer]
  }],
  [UprisingMapName.DivideAndConquer, {
    mapName: UprisingMapName.DivideAndConquer,
    image: '../../../assets/uprising_maps_v2/DivideAndConquer_2Player_v1_Tavern.jpg',
    description: 'A 1vs1 map with more space and additional points to control. Spreading out to control and hold multiple points will be key to victory on this map.',
    numberOfPlayers: 2,
    objective: UprisingMapObjective.PointControl,
    variants: [UprisingMapObjective.Conquest, UprisingMapObjective.Slayer]
  }],
])
