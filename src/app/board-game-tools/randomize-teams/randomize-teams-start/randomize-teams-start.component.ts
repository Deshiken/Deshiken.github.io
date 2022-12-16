import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { RandomizeTeamsService, TeamOption } from '../randomize-teams.service';

@Component({
  selector: 'app-randomize-teams-start',
  templateUrl: './randomize-teams-start.component.html',
  styleUrls: ['./randomize-teams-start.component.scss']
})
export class RandomizeTeamsStartComponent implements OnInit {

  
  @ViewChild('playerNumber') playerNumber!: ElementRef;
  @ViewChild('numberOfTeams') numberOfTeams!: ElementRef;

  teamOptions: Array<TeamOption> = new Array<TeamOption>();

  constructor(
    public teamRandomizeService: RandomizeTeamsService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.teamOptions.push(this.teamRandomizeService.option2vs2)
  }

  get teamsAvailable(): boolean { 
   return (this.numberOfTeams?.nativeElement?.disabled ? true : false);
  }

  public playerNumberSelect() {
    // Reset Team option array
    this.teamOptions = new Array<TeamOption>();
    this.teamRandomizeService.numberOfPlayers = this.playerNumber.nativeElement.value;

    // Depending on the number of players selected, add the options for the possible team choices
    switch (this.playerNumber.nativeElement.value) {
      case '2':
      case '3':
      case '5':
      case '7': {
        this.numberOfTeams.nativeElement.disabled = true;
        break;
      }
      case '4':
        this.numberOfTeams.nativeElement.disabled = false;
        this.teamOptions = [this.teamRandomizeService.option2vs2];
        break;
      case '6':
        this.numberOfTeams.nativeElement.disabled = false;
        this.teamOptions = [this.teamRandomizeService.option3vs3, this.teamRandomizeService.option2vs2vs2];
        break;
      case '8':
        this.numberOfTeams.nativeElement.disabled = false;
        this.teamOptions = [this.teamRandomizeService.option4vs4, this.teamRandomizeService.option2vs2vs2vs2];
        break;
    }
  }

  next() {
    this.router.navigate(
      ['/tools/player-select'], 
      {queryParams: {numberOfPlayers: this.teamRandomizeService.numberOfPlayers, nextPage: '/tools/randomize-teams-results'}}
    );
  }

}
