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
  // 4 Player Maps
  FourPlayerStandard = 'Four Player Standard',
  Friends ='Friends',
  FourCorners ='Four Corners',
  Sanctuary ='Sanctuary',
  CloseQuarters ='Close Quarters',
  Star ='Star',
  TwoVsTwoCaptureTheFlag = '2vs2 Capture The Flag',
  FourPlayerCaptureTheFlag = 'Four Player Capture The Flag',
  // 2 Player Maps
  TwoPlayerStandard = 'Two Player Standard',
  TheGrid = 'The Grid',
  TwoPlayerCloseQuarter = 'Two Player Close Quarters',
  TwoPlayerCaptureTheFlag = 'Capture The Flag',
  // 3 Player Maps
  FortressDefense = 'Fortress Defense',
  // 5 Player Maps
  FivePlayerAssault = 'Five Player Assault',
}

export const UprisingMaps: Map<UprisingMapName, MapData> = new Map([
  [UprisingMapName.FourPlayerStandard, {
    mapName: UprisingMapName.FourPlayerStandard,
    image: '../../../assets/uprising_maps/4Player_StandardGameBoard_v4.jpg',
    description: 'The recomended map for starting players.',
    numberOfPlayers: 4,
    objective: UprisingMapObjective.PointControl,
    variants: [UprisingMapObjective.Conquest, UprisingMapObjective.Slayer]
  }],
  [UprisingMapName.Friends, {
    mapName: UprisingMapName.Friends,
    image: '../../../assets/uprising_maps/4Player_Friends_v1.jpg',
    description: 'A 2vs2 map placing teammates close to one another but also enemies within striking distance of your capitol.',
    numberOfPlayers: 4,
    objective: UprisingMapObjective.PointControl,
    variants: [UprisingMapObjective.Conquest, UprisingMapObjective.Slayer]
  }],
  [UprisingMapName.FourCorners, {
    mapName: UprisingMapName.FourCorners,
    image: '../../../assets/uprising_maps/4Player_FourCorners_v1.jpg',
    description: 'A 2vs2 map placing teammates close to one another but also enemies within striking distance of your capitol.',
    numberOfPlayers: 4,
    objective: UprisingMapObjective.PointControl,
    variants: [UprisingMapObjective.Conquest, UprisingMapObjective.Slayer]
  }],
  [UprisingMapName.Sanctuary, {
    mapName: UprisingMapName.Sanctuary,
    image: '../../../assets/uprising_maps/4Player_Sanctuary_v1.jpg',
    description: 'This map features a seperate island that is only accessable through use of a portal. Control of this island is vital in order to obtain enough points to win, but be carful not to spread your forces too thin.',
    numberOfPlayers: 4,
    objective: UprisingMapObjective.PointControl,
    variants: [UprisingMapObjective.Conquest, UprisingMapObjective.Slayer]
  }],
  [UprisingMapName.CloseQuarters, {
    mapName: UprisingMapName.CloseQuarters,
    image: '../../../assets/uprising_maps/4Player_CloseQuarters_v1.jpg',
    description: 'This map is sure to see fast and early combat as each player is only a move or two away from each other. Player capitols are moved to the interior of the map with a central flag to fight for control of while other objectives are located around the maps perimeter.',
    numberOfPlayers: 4,
    objective: UprisingMapObjective.PointControl,
    variants: [UprisingMapObjective.Conquest, UprisingMapObjective.Slayer]
  }],
  [UprisingMapName.Star, {
    mapName: UprisingMapName.Star,
    image: '../../../assets/uprising_maps/4Player_Star_v1.jpg',
    description: 'Tired of square maps? Try this unique map design for a new feel.',
    numberOfPlayers: 4,
    objective: UprisingMapObjective.PointControl,
    variants: [UprisingMapObjective.Conquest, UprisingMapObjective.Slayer]
  }],
  [UprisingMapName.FivePlayerAssault, {
    mapName: UprisingMapName.FivePlayerAssault,
    image: '../../../assets/uprising_maps/5Player_Assault_v1.jpg',
    description: 'A 3 vs 2 map where the team of 3 must assault a well positioned and stronger team of 2. The team of 3 must destroy one capitol of the team of two before the end of the fifth round to win. Purple colored portals may only be used by the defending team.',
    numberOfPlayers: 5,
    objective: UprisingMapObjective.Survival,
  }],
  [UprisingMapName.TwoVsTwoCaptureTheFlag, {
    mapName: UprisingMapName.TwoVsTwoCaptureTheFlag,
    image: '../../../assets/uprising_maps/4Player_CaptureTheFlag4Teams_v1.jpg',
    description: 'Capture the flag, 2vs2.',
    numberOfPlayers: 4,
    objective: UprisingMapObjective.CaptureTheFlag
  }],
  [UprisingMapName.TwoPlayerStandard, {
    mapName: UprisingMapName.TwoPlayerStandard,
    image: '../../../assets/uprising_maps/2Player_Standard_v2.jpg',
    description: 'Standard map for 1vs1 play.',
    numberOfPlayers: 2,
    objective: UprisingMapObjective.PointControl
  }],
  [UprisingMapName.TheGrid, {
    mapName: UprisingMapName.TheGrid,
    image: '../../../assets/uprising_maps/2Player_TheGrid_v2.jpg',
    description: 'A larger squared map for 1vs1 play.',
    numberOfPlayers: 2,
    objective: UprisingMapObjective.PointControl
  }],
  [UprisingMapName.TwoPlayerCloseQuarter, {
    mapName: UprisingMapName.TwoPlayerCloseQuarter,
    image: '../../../assets/uprising_maps/2Player_CloseQuarters_v1.jpg',
    description: 'A small map with few objective and capitols that are placed close to each other.',
    numberOfPlayers: 2,
    objective: UprisingMapObjective.PointControl
  }],
  [UprisingMapName.TwoPlayerCaptureTheFlag, {
    mapName: UprisingMapName.TwoPlayerCaptureTheFlag,
    image: '../../../assets/uprising_maps/2Player_CaptureTheFlag_v2.jpg',
    description: 'A 1vs1 Capture the flag.',
    numberOfPlayers: 2,
    objective: UprisingMapObjective.CaptureTheFlag
  }],
])
