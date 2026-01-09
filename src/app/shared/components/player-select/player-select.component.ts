import { Component, inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FadeInOutAnimation } from '../../animations/fadeInOutAnimation';
import { IconSize, PlayerIcons } from '../player-icon/player-icon.component';
import { PlayerSelectService } from './player-select.service';

@Component({
  selector: 'app-player-select',
  templateUrl: './player-select.component.html',
  styleUrls: ['./player-select.component.scss'],
  animations: [
    FadeInOutAnimation
  ]
})
export class PlayerSelectComponent implements OnInit {
  playerSelectService = inject(PlayerSelectService);
  router = inject(Router);
  route = inject(ActivatedRoute);

  numberOfPlayers: number = 0;
  nextPage: string = '';
  IconSize = IconSize;
  iconValuesArray: Array<string> = Object.keys(PlayerIcons) as Array<string>;
  
  public errors = {
    tooFewIconsSelected: false
  }
  // constructor(
  //   public playerSelectService: PlayerSelectService,
  //   public router: Router,
  //   public route: ActivatedRoute,
  // ) { }
  
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.numberOfPlayers = params['numberOfPlayers'];
      this.nextPage = params['nextPage'];
    })
  }

  public undo() {
    this.playerSelectService.selectedIcons.pop();
  }
  
  public selectIcon(selectedIcon: string) {
    if (this.playerSelectService.selectedIcons.length < this.numberOfPlayers) {
      this.playerSelectService.selectedIcons.push(selectedIcon);
    }
  }

  public next() {
    if (this.playerSelectService.selectedIcons.length < this.numberOfPlayers) {
      this.errors.tooFewIconsSelected = true;
    } else {
      this.router.navigate([this.nextPage]);
    }
  }

}
