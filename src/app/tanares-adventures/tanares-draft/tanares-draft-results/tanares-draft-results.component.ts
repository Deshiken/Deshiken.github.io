import { Component } from '@angular/core';

import { TanaresDraftService } from '../tanares-draft-service.service';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
    selector: 'app-tanares-draft-results',
    imports: [SharedModule],
    templateUrl: './tanares-draft-results.component.html',
    styleUrls: ['./tanares-draft-results.component.scss']
})

export class TanaresDraftResultsComponent {
  sortedChosenTanaresRelics = this.tanaresDraftService.chosenTanaresRelics.sort((a,b) => a.level - b.level);
  sortedChosenTanaresHeroes = this.tanaresDraftService.chosenTanaresHeroes.sort((a,b) => a.class.localeCompare(b.class));

  constructor(public tanaresDraftService: TanaresDraftService){}
}
