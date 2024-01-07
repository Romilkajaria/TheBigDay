import {ComponentFixture, TestBed} from '@angular/core/testing';

import {VendorStoreComponent} from './vendor-store.component';

describe('VendorStoreComponent', () => {
  let component: VendorStoreComponent;
  let fixture: ComponentFixture<VendorStoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorStoreComponent]
    });
    fixture = TestBed.createComponent(VendorStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
