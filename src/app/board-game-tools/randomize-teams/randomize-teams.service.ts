import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomizeTeamsService {

  public freeForAll: TeamOption = {
    displayName: 'Free for All',
    numberOfTeams: 0,
    playersPerTeam: 0
  };
  public option2vs2: TeamOption = {
    displayName: '2vs2',
    numberOfTeams: 2,
    playersPerTeam: 2
  };
  public option3vs3: TeamOption = {
    displayName: '3vs3',
    numberOfTeams: 2,
    playersPerTeam: 3
  };
  public option2vs2vs2: TeamOption = {
    displayName: '2vs2vs2',
    numberOfTeams: 3,
    playersPerTeam: 2
  };
  public option4vs4: TeamOption = {
    displayName: '4vs4',
    numberOfTeams: 2,
    playersPerTeam: 4
  };
  public option2vs2vs2vs2: TeamOption = {
    displayName: '2vs2vs2vs2',
    numberOfTeams: 4,
    playersPerTeam: 2
  };

  // Default number of players is 4;
  public numberOfPlayers: number = 4;
  // Default teams is free for all (no teams)
  public selectedTeamOption: TeamOption = this.freeForAll;
  

  constructor() { }
}

export interface TeamOption { 
  displayName:string;
  numberOfTeams: number;
  playersPerTeam: number;
}