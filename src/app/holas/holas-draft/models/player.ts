import { HolasFaction, Mercenary, SelectedFaction } from "../holas-draft.service"

export class Player {
  public playerNumber: number;
  public icon: string;
  public team: number;
  public factionPick: SelectedFaction;
  public mercenaryPick: string;
  
  constructor (playerNumber: number, icon: string, team: number, factionPick?: HolasFaction, mercenaryPick?: Mercenary ) {
    this.playerNumber = playerNumber,
    this.icon = icon,
    this.team = team
  }
}
