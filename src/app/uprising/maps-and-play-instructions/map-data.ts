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
  Conquest = 'Conquest',
  Slayer = 'Slayer',
  Custom = 'Custom',
}

export enum UprisingMapName {
  TwoPlayerStandard = 'TwoPlayerStandard',
  TwoVsTwoCaptureTheFlag = '2vs2CaptureTheFlag',
  FortressDefense = 'FortressDefense',
  FourPlayerStandard = 'Four Player Standard',
  FourPlayerCaptureTheFlag = 'FourPlayerCaptureTheFlag',
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
  [UprisingMapName.TwoVsTwoCaptureTheFlag, {
    mapName: UprisingMapName.TwoVsTwoCaptureTheFlag,
    image: '../../../assets/uprising_maps/4Player_CaptureTheFlag4Player_v1.jpg',
    description: 'Capture the flag, 2vs2.',
    numberOfPlayers: 4,
    objective: UprisingMapObjective.CaptureTheFlag
  }],
])
