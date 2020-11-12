import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteLandlordComponent } from './delete-landlord.component';

describe('DeleteLandlordComponent', () => {
  let component: DeleteLandlordComponent;
  let fixture: ComponentFixture<DeleteLandlordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteLandlordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteLandlordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
