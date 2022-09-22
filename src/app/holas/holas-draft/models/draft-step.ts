import { Player } from "./player";

export class DraftStep {
  player: Player
  choice: string

  constructor (player?: Player) {
    player ? this.player = player : this.player = new Player(1,'', 1)
  }
}
