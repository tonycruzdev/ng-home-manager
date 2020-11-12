import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailLandlordComponent } from './detail-landlord.component';

describe('DetailLandlordComponent', () => {
  let component: DetailLandlordComponent;
  let fixture: ComponentFixture<DetailLandlordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailLandlordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailLandlordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
