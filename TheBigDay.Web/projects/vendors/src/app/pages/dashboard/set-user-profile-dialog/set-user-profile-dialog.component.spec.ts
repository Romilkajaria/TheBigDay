import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetUserProfileDialogComponent } from './set-user-profile-dialog.component';

describe('SetStoreTypeDialogComponent', () => {
  let component: SetUserProfileDialogComponent;
  let fixture: ComponentFixture<SetUserProfileDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetUserProfileDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetUserProfileDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
