import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddServicesFormComponent } from './add-services-form.component';

describe('AddServicesFormComponent', () => {
  let component: AddServicesFormComponent;
  let fixture: ComponentFixture<AddServicesFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddServicesFormComponent]
    });
    fixture = TestBed.createComponent(AddServicesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
