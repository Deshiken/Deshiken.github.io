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
  Star = 'Star',
  Honeycomb = 'Honeycomb',
  Pyramid = 'Pyramid',
  // 4 Player Maps
  FourPlayerStandard = 'Four Player Standard',
  Colosseum = 'Colosseum',
  CloseQuarters = 'Close Quarters',
  HourGlass = 'Hour Glass',
  BreathingRoom = 'Breathing Room',
  TheFly = 'The Fly',
  GreatSacrifice = 'Great Sacrifice',
  TheWildHunt = 'The Wild Hunt',
  TheWildHuntv2 = 'The Wild Hunt Version 2',
  CaptureTheFlag = 'Capture The Flag',
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
  [UprisingMapName.TheWildHuntv2, {
    mapName: UprisingMapName.TheWildHuntv2,
    image: '../../../assets/uprising_maps_v2/TheWildHunt_4Player_v3_Tavern.jpg',
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
  [UprisingMapName.CaptureTheFlag, {
    mapName: UprisingMapName.CaptureTheFlag,
    image: '../../../assets/uprising_maps_v2/Capture_the_Flag_4Player_v1_Tavern.jpg',
    description: 'Points on this map are scored by capturing a flag and returning it to your capital.',
    specialRules: [
      'This game mode is played 2vs2 with one team being the green team and one team being the red team. Each player places their capitol according to their teams color using the setup map.',
      'Only red flags may be captured by the red team and green flags by the green team.',
      'To capture a flag you must have a unit in the same region of the flag. At any point on your turn, you may place the flag on a unit you control of your choice to capture it. This is the flag carrier.',
      'The flag will move with the flag carrier during move actions.',
      'If the flag carrier is destroyed, the owner of that unit may choose a unit in the same region as the destroyed unit to be the new flag carrier.',
      'If the flag carrier is destoryed and no new flag carrier is/can be choosen, the flag will remain in the region of the destroyed unit.',
      'If a flag is not in one of the marked starting positions and is not being carried, units of the opposite team may send that flag back to any one of the starting flag positions that does not currently have a flag present.',
      'Flag carriers can not be moved by spells.',
      'Flag carriers have -1 movement.',
      '1 Point is gaind if a team is able to capture a flag and move that flag to any capitol of that team. The flag is then returned to any one of the starting flag positions that does not have a flag present.'
    ],
    numberOfPlayers: 4,
    objective: UprisingMapObjective.Custom,
  }],
  // 3 Player Maps
  [UprisingMapName.FortressDefense, {
    mapName: UprisingMapName.FortressDefense,
    image: '../../../assets/uprising_maps_v2/Fortress_3Player_v1_Tavern.jpg',
    description: 'A player surrounded by opposing forces must survive a multi-round siege.',
    specialRules: [
      "The player with green colored buildings in the map image is the defending player, the other two capitols are the attacking players.",
      "The portals adjacent to the defending player's capitol can only be used by the defending player.",
      "The defending player may take 3 actions per turn instead of two.",
      "The game is won by the attackers if they are successful in destroying the defending player's capitol by the end of the 4th round.",
      "If the defending player destroys a capitol of an attacking player, that player is removed from the game. The player removes any pieces they have from the board and may no longer take any turns."
    ],
    numberOfPlayers: 3,
    objective: UprisingMapObjective.Survival,
    variants: [UprisingMapObjective.Conquest, UprisingMapObjective.Slayer]
  }],
  [UprisingMapName.Star, {
    mapName: UprisingMapName.Star,
    image: '../../../assets/uprising_maps_v2/Star_3Player_v1_Tavern.jpg',
    description: 'A star shaped may for a free-for-all 3 player match.',
    numberOfPlayers: 3,
    objective: UprisingMapObjective.PointControl,
    variants: [UprisingMapObjective.Conquest, UprisingMapObjective.Slayer]
  }],
  [UprisingMapName.Honeycomb, {
    mapName: UprisingMapName.Honeycomb,
    image: '../../../assets/uprising_maps_v2/Honeycomb_3Player_v1_Tavern.jpg',
    description: '',
    numberOfPlayers: 3,
    objective: UprisingMapObjective.PointControl,
    variants: [UprisingMapObjective.Conquest, UprisingMapObjective.Slayer]
  }],
  [UprisingMapName.Pyramid, {
    mapName: UprisingMapName.Pyramid,
    image: '../../../assets/uprising_maps_v2/Pyramid_3Player_v1_Tavern.jpg',
    description: '',
    numberOfPlayers: 3,
    objective: UprisingMapObjective.PointControl,
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
