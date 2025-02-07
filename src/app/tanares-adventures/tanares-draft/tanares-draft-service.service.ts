import { Injectable } from '@angular/core';
import { TanaresHero, TanaresRelic } from '../tanares-data';

@Injectable({
  providedIn: 'root'
})
export class TanaresDraftService {
  public chosenTanaresHeroes: Array<TanaresHero> = []
  public chosenTanaresRelics: Array<TanaresRelic> = []
  public chosenTanaresHeroicActions: Array<string> = []

  constructor() { }
}
