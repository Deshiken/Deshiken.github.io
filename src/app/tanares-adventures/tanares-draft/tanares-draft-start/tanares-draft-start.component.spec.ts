import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TanaresDraftStartComponent } from './tanares-draft-start.component';

describe('TanaresDraftStartComponent', () => {
  let component: TanaresDraftStartComponent;
  let fixture: ComponentFixture<TanaresDraftStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TanaresDraftStartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TanaresDraftStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
