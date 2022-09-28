import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RandomService } from 'src/app/shared/random/random.service';
import { HolasDraftService } from '../holas-draft.service';

import { DraftStartComponent } from './draft-start.component';

fdescribe('DraftStartComponent', () => {
  let component: DraftStartComponent;
  let fixture: ComponentFixture<DraftStartComponent>;

  let mockDraftService: jasmine.SpyObj<HolasDraftService>;
  // let mockDraftService: Pick<HolasDraftService, keyof HolasDraftService>;
  // let mockRandomService: jasmine.SpyObj<RandomService>;
  // let mockRouter: jasmine.SpyObj<Router>;
  
  // let draftServiceSpy = jasmine.createSpyObj('DraftService', [''], {availableMercs: [], availableFactions: [], numberOfPlayers: 4});
  let draftService = new HolasDraftService();
  let mockRandomService = jasmine.createSpyObj('RandomService', ['']);
  let mockRouter = jasmine.createSpyObj('Router', ['']);
  
  beforeEach(async () => { 
    await TestBed.configureTestingModule({
      providers: [
        // {provide: HolasDraftService, useValue: mockDraftService},
        // {provide: HolasDraftService, useValue: draftServiceSpy},
        {provide: HolasDraftService, useValue: draftService},
        {provide: RandomService, useValue: mockRandomService},
        {provide: Router, useValue: mockRouter},
      ],
      declarations: [ DraftStartComponent ]
    })
    .compileComponents();

    // mockDraftService.availableFactions = [];
    // mockDraftService.availableMercs = [];
    mockDraftService = TestBed.inject(HolasDraftService) as jasmine.SpyObj<HolasDraftService>;
    // mockDraftService.numberOfPlayers = 4;
    // mockDraftService.availableFactions = [];
    // mockDraftService.availableMercs = [];
    // draftServiceSpy.numberOfPlayers = 4;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create', () => {
    mockDraftService.numberOfPlayers = 6;
    // component.draftService.numberOfPlayers = 6
    expect(component.draftService.numberOfPlayers).toEqual(6);
  });
});
