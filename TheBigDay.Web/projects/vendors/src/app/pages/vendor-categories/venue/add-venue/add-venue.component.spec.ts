import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVenueComponent } from './add-venue.component';

describe('AddProductFormComponent', () => {
  let component: AddVenueComponent;
  let fixture: ComponentFixture<AddVenueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddVenueComponent]
    });
    fixture = TestBed.createComponent(AddVenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
