import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeutralAbilitiesViewComponent } from './neutral-abilities-view.component';
import { SharedModule } from 'src/app/shared/shared.module';

describe('NeutralAbilitiesViewComponent', () => {
  let component: NeutralAbilitiesViewComponent;
  let fixture: ComponentFixture<NeutralAbilitiesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NeutralAbilitiesViewComponent, SharedModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NeutralAbilitiesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
