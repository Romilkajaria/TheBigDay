import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetStoreDetailsDialogComponent } from './set-store-details-dialog.component';

describe('SetStoreDetailsDialogComponent', () => {
  let component: SetStoreDetailsDialogComponent;
  let fixture: ComponentFixture<SetStoreDetailsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetStoreDetailsDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SetStoreDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
