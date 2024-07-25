import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetStorePaymentPreferencesDialogComponent } from './set-store-payment-preferences-dialog.component';

describe('SetStorePaymentPreferencesDialogComponent', () => {
  let component: SetStorePaymentPreferencesDialogComponent;
  let fixture: ComponentFixture<SetStorePaymentPreferencesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetStorePaymentPreferencesDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SetStorePaymentPreferencesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
