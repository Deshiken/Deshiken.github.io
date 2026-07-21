import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TinyEpicDungeonsHomeComponent } from './tiny-epic-dungeons-home.component';

describe('TinyEpicDungeonsHomeComponent', () => {
  let component: TinyEpicDungeonsHomeComponent;
  let fixture: ComponentFixture<TinyEpicDungeonsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TinyEpicDungeonsHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TinyEpicDungeonsHomeComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
