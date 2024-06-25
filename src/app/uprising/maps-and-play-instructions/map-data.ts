export interface MapData {
  mapName: UprisingMapName,
  image: string,
  description: string,
  numberOfPlayers: number,
  objective: UprisingMapObjective,
  specialRules?: string,
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
  // 3 Player Maps
  FortressDefense = 'Fortress Defense',
  // 4 Player Maps
  FourPlayerStandard = 'Four Player Standard',
  Colosseum ='Colosseum',
  CloseQuarters ='Close Quarters',
  HourGlass ='Hour Glass',
  BreathingRoom ='Breathing Room',
  TheFly ='The Fly',
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
    image: '../../../assets/uprising_maps_v2/BreathingRoom_4Player_v1_Tavern.jpg',
    description: 'This map is sure to see fast and early combat as each player is only a move or two away from each other. Player capitols are moved to the interior of the map with a central flag to fight for control of while other objectives are located around the maps perimeter.',
    numberOfPlayers: 4,
    objective: UprisingMapObjective.PointControl,
    variants: [UprisingMapObjective.Conquest, UprisingMapObjective.Slayer]
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
])
