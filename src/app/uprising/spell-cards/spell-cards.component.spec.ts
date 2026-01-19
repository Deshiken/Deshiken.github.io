import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { SpellCardService } from './spell-cards.service';
import { Router } from '@angular/router';

import { SpellCardsComponent } from './spell-cards.component';
import { CastType, Region, SpellCard } from './spell-card-data';

enum SpellCardSortOptions {
  Alphabetical = "Alphabetical",
  SpellCostHighest = "Spell Cost Highest",
  SpellCostLowest = "Spell Cost Lowest",
  PreparedSpells = "Prepared Spells",
  InstantSpells = "Instant Spells",
  CombatSpells = "Combat Spells",
}

describe('SpellCardsComponent', () => {
  let component: SpellCardsComponent;
  let fixture: ComponentFixture<SpellCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpellCardsComponent ],
      providers: [
        { provide: ActivatedRoute, useValue: { snapshot: { queryParamMap: { get: () => null } } } },
        { provide: SpellCardService, useValue: { spellCardsToPrint: new Map() } },
        { provide: Router, useValue: {} }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpellCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('sortSpellCardList', () => {
    let mockCards: SpellCard[];

    beforeEach(() => {
      mockCards = [
        { name: 'Zealot', spellCost: 3, castType: CastType.Prepared, regions: [Region.Forest] } as SpellCard,
        { name: 'Arcane Shield', spellCost: 1, castType: CastType.Instant, regions: [Region.Plains] } as SpellCard,
        { name: 'Fireball', spellCost: 2, castType: CastType.Combat, regions: [Region.Hills] } as SpellCard,
        { name: 'Heal', spellCost: 3, castType: CastType.Prepared, regions: [Region.Badlands] } as SpellCard,
        { name: 'Lightning Bolt', spellCost: 4, castType: CastType.Instant, regions: [Region.Marsh] } as SpellCard,
      ];
      component.spellCards = [...mockCards];
    });

    it('should sort alphabetically', () => {
      component.sortSpellCardList(SpellCardSortOptions.Alphabetical);
      expect(component.spellCards.map(c => c.name)).toEqual(['Arcane Shield', 'Fireball', 'Heal', 'Lightning Bolt', 'Zealot']);
    });

    it('should sort by spell cost highest', () => {
      component.sortSpellCardList(SpellCardSortOptions.SpellCostHighest);
      expect(component.spellCards.map(c => c.name)).toEqual(['Lightning Bolt', 'Heal', 'Zealot', 'Fireball', 'Arcane Shield']);
    });

    it('should sort by spell cost lowest', () => {
      component.sortSpellCardList(SpellCardSortOptions.SpellCostLowest);
      expect(component.spellCards.map(c => c.name)).toEqual(['Arcane Shield', 'Fireball', 'Heal', 'Zealot', 'Lightning Bolt']);
    });

    it('should sort prepared spells first, then by cost desc, then name', () => {
      component.sortSpellCardList(SpellCardSortOptions.PreparedSpells);
      expect(component.spellCards.map(c => c.name)).toEqual(['Heal', 'Zealot', 'Arcane Shield', 'Fireball', 'Lightning Bolt']);
    });

    it('should sort instant spells first, then by cost desc, then name', () => {
      component.sortSpellCardList(SpellCardSortOptions.InstantSpells);
      expect(component.spellCards.map(c => c.name)).toEqual(['Lightning Bolt', 'Arcane Shield', 'Fireball', 'Heal', 'Zealot']);
    });

    it('should sort combat spells first, then by cost desc, then name', () => {
      component.sortSpellCardList(SpellCardSortOptions.CombatSpells);
      expect(component.spellCards.map(c => c.name)).toEqual(['Fireball', 'Lightning Bolt', 'Heal', 'Zealot', 'Arcane Shield']);
    });
  });
});
