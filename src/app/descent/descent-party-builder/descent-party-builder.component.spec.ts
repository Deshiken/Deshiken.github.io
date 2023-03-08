import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescentPartyBuilderComponent } from './descent-party-builder.component';

describe('DescentPartyBuilderComponent', () => {
  let component: DescentPartyBuilderComponent;
  let fixture: ComponentFixture<DescentPartyBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ DescentPartyBuilderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescentPartyBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
