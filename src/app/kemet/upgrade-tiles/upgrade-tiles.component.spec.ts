import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradeTilesComponent } from './upgrade-tiles.component';

describe('UpgradeTilesComponent', () => {
  let component: UpgradeTilesComponent;
  let fixture: ComponentFixture<UpgradeTilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpgradeTilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpgradeTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
