import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescentPartyBuilderService } from '../descent-party-builder.service';
import { DescentHero, ExpansionKey,ExpansionType,DescentExpansion, DescentClass, Archetype } from '../descent-data';
import { FormsModule } from '@angular/forms';
import { expansionMap } from '../descent-data';
import { RandomService } from 'src/app/shared/services/random.service';
// import { Toast } from 'bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-descent-party-builder',
  standalone: true,
  imports: [CommonModule, FormsModule, SharedModule],
  templateUrl: './descent-party-builder.component.html',
  styleUrls: ['./descent-party-builder.component.scss']
})

export class DescentPartyBuilderComponent implements OnInit {
  public ExpansionKey = ExpansionKey;
  public expansionMap = expansionMap;

  @ViewChild('savedOptionsToast') savedOptionsToast!: ElementRef;

  public boxExpansions = new Map([...expansionMap].filter(([key, value]) => value.expansionType === ExpansionType.BoxExpansion))
  public characterAndMonsterExpansions = new Map([...expansionMap].filter(([key, value]) => value.expansionType === ExpansionType.CharacterAndMonsterPack))
  
  public selectedParty: Array<DescentHero> = new Array<DescentHero>();
  public ownedHealersHeroes: Array<DescentClass> = new Array<DescentClass>();
  public ownedWarriorsHeroes: Array<DescentClass> = new Array<DescentClass>();
  public ownedScoutsHeroes: Array<DescentClass> = new Array<DescentClass>();
  public ownedMagesHeroes: Array<DescentClass> = new Array<DescentClass>();
  public ownedHealersClasses: Array<DescentClass> = new Array<DescentClass>();
  public ownedWarriorsClasses: Array<DescentClass> = new Array<DescentClass>();
  public ownedScoutsClasses: Array<DescentClass> = new Array<DescentClass>();
  public ownedMagesClasses: Array<DescentClass> = new Array<DescentClass>();

  constructor( 
    public partyBuilderService: DescentPartyBuilderService,
    public tools: RandomService
  ) { }

  ngOnInit(): void {
    this.partyBuilderService.setPartyBuilderData();
    console.log('boxExpansions', this.boxExpansions);
    console.log('characterAndMonsterExpansions', this.characterAndMonsterExpansions);
  }

  public buildParty() {
    this.resetOwnedContent();

    this.buildOwnedHeroesAndClassesArrays();

    if (this.partyBuilderService.descentPartyBuilderOptions.preventRepeatClasses === false) {
      this.selectRandomHeroesWithArchetypeRepeats()
    } else {
      this.selectRandomHeroesWithoutArchetypeRepeats()
    }
    
    this.selectClassForEachHero()

    console.log('ending mages', this.ownedMagesClasses);
    console.log('ending warriors', this.ownedWarriorsClasses);
    console.log('ending scouts', this.ownedScoutsClasses);
    console.log('ending healers', this.ownedHealersClasses);
    console.log('ending selected heroes', this.selectedParty);
  }


  private buildOwnedHeroesAndClassesArrays() {
    expansionMap.forEach((value: DescentExpansion, key: ExpansionKey) => {
      if (this.partyBuilderService.descentPartyBuilderOptions[key] === true) {
        value.classesAdded.forEach((descentClass) => {
          if (this.partyBuilderService.descentPartyBuilderOptions.includeHybridClass === false && descentClass.hybridArchetype) {
            // Do noting
          } else {
            switch(descentClass.archetype) {
              case Archetype.Healer:
                this.ownedHealersClasses.push(descentClass);
                break;
              case Archetype.Warrior:
                this.ownedWarriorsClasses.push(descentClass);
                break;
              case Archetype.Scout:
                this.ownedScoutsClasses.push(descentClass);
                break;
              case Archetype.Mage:
                this.ownedMagesClasses.push(descentClass);
                break;
            }
          }
        })
        value.heroesAdded.forEach((descentHero) => {
          switch(descentHero.archetype) {
            case Archetype.Healer:
              this.ownedHealersHeroes.push(descentHero);
              break;
            case Archetype.Warrior:
              this.ownedWarriorsHeroes.push(descentHero);
              break;
            case Archetype.Scout:
              this.ownedScoutsHeroes.push(descentHero);
              break;
            case Archetype.Mage:
              this.ownedMagesHeroes.push(descentHero);
              break;
          }
        })
      }
    });
  }

  private selectRandomHeroesWithArchetypeRepeats() {
    //merge all hero archetype arrays into a single array
    let allOwnedHeroes: Array<DescentHero> = [...this.ownedHealersHeroes, ...this.ownedMagesHeroes, ...this.ownedScoutsHeroes, ...this.ownedWarriorsHeroes]

    // for each player select a random character from the list of owned characters.
    for (let i = 0; i < this.partyBuilderService.descentPartyBuilderOptions.numberOfPartyMembers; i++) {
      let randomCharacter = this.tools.getRandomEntryFromArray(allOwnedHeroes);
      this.selectedParty.push(randomCharacter);
      this.tools.deleteFromArray(allOwnedHeroes, randomCharacter);
    }
  }

  private selectRandomHeroesWithoutArchetypeRepeats() {
    // build an array of hero arrays. Each sub array is all of the heroes of a specific archetype.  
    let multiHeroArray: Array<any> = [[...this.ownedHealersHeroes], [...this.ownedMagesHeroes], [...this.ownedScoutsHeroes], [...this.ownedWarriorsHeroes]]

    // get one hero for each of the number of party members
    for (let i = 0; i < this.partyBuilderService.descentPartyBuilderOptions.numberOfPartyMembers; i++) {

      // randomly select one of the sub arrays
      let heroSubArray = this.tools.getRandomEntryFromArray(multiHeroArray);
      
      // get a random hero from the sub array
      let selectedHero = this.tools.getRandomEntryFromArray(heroSubArray);

      // add the selected hero to our party
      this.selectedParty.push(selectedHero);

      // remove the sub array so a hero of that archetype will not be selected again.
      this.tools.deleteFromArray(multiHeroArray, heroSubArray);
    }
  }

  private selectClassForEachHero() {
    // randomly select a class for each previously selected hero
    this.selectedParty.forEach(hero => {
      switch (hero.archetype) {
        case Archetype.Healer:
          hero.class = this.tools.getRandomEntryFromArray(this.ownedHealersClasses);
          this.tools.deleteFromArray(this.ownedHealersClasses, hero.class);
          break;
        case Archetype.Warrior:
          hero.class = this.tools.getRandomEntryFromArray(this.ownedWarriorsClasses);
          this.tools.deleteFromArray(this.ownedWarriorsClasses, hero.class);
          break;
        case Archetype.Scout:
          hero.class = this.tools.getRandomEntryFromArray(this.ownedScoutsClasses);
          this.tools.deleteFromArray(this.ownedScoutsClasses, hero.class);
          break;
        case Archetype.Mage:
          hero.class = this.tools.getRandomEntryFromArray(this.ownedMagesClasses);
          this.tools.deleteFromArray(this.ownedMagesClasses, hero.class);
          break;
      }
      if (this.partyBuilderService.descentPartyBuilderOptions.selectHybridSubclass === true && hero.class?.hybridArchetype) {
        switch (hero.class?.hybridArchetype) {
          case Archetype.Healer:
            hero.class.hybridSubClass = this.tools.getRandomEntryFromArray(this.ownedHealersClasses.filter(clazz => clazz.hybridArchetype === undefined));
            this.tools.deleteFromArray(this.ownedHealersClasses, hero.class);
            break;
          case Archetype.Warrior:
            hero.class.hybridSubClass = this.tools.getRandomEntryFromArray(this.ownedWarriorsClasses.filter(clazz => clazz.hybridArchetype === undefined));
            this.tools.deleteFromArray(this.ownedWarriorsClasses, hero.class);
            break;
          case Archetype.Scout:
            hero.class.hybridSubClass = this.tools.getRandomEntryFromArray(this.ownedScoutsClasses.filter(clazz => clazz.hybridArchetype === undefined));
            this.tools.deleteFromArray(this.ownedScoutsClasses, hero.class);
            break;
          case Archetype.Mage:
            hero.class.hybridSubClass = this.tools.getRandomEntryFromArray(this.ownedMagesClasses.filter(clazz => clazz.hybridArchetype === undefined));
            this.tools.deleteFromArray(this.ownedMagesClasses, hero.class);
            break;
        }
      }
    })
  }

  private resetOwnedContent() {
    this.ownedHealersHeroes = [];
    this.ownedMagesHeroes = [];
    this.ownedWarriorsHeroes = [];
    this.ownedScoutsHeroes = [];
    this.ownedMagesClasses = [];
    this.ownedWarriorsClasses = [];
    this.ownedScoutsClasses = [];
    this.ownedHealersClasses = [];
    this.selectedParty = [];
  }

  public saveOptions() {
    this.partyBuilderService.saveToLocalStorage();

    this.savedOptionsToast.nativeElement.classList.add('show');
    window.setTimeout(() => {this.savedOptionsToast.nativeElement.classList.remove('show')}, 3000);
  }

}

