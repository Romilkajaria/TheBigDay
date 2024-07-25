import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetStoreTypeDialogComponent } from './set-store-type-dialog.component';

describe('SetStoreTypeDialogComponent', () => {
  let component: SetStoreTypeDialogComponent;
  let fixture: ComponentFixture<SetStoreTypeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetStoreTypeDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SetStoreTypeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
