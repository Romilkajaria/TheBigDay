import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorPackagesComponent } from './vendor-packages.component';

describe('SettingsComponent', () => {
  let component: VendorPackagesComponent;
  let fixture: ComponentFixture<VendorPackagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorPackagesComponent]
    });
    fixture = TestBed.createComponent(VendorPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
