import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HousesHomeComponent } from './houses-home.component';

describe('HousesHomeComponent', () => {
  let component: HousesHomeComponent;
  let fixture: ComponentFixture<HousesHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HousesHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HousesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
