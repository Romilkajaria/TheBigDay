import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorPageShellComponent } from './vendor-page-shell.component';

describe('VendorPageShellComponent', () => {
  let component: VendorPageShellComponent;
  let fixture: ComponentFixture<VendorPageShellComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorPageShellComponent]
    });
    fixture = TestBed.createComponent(VendorPageShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
