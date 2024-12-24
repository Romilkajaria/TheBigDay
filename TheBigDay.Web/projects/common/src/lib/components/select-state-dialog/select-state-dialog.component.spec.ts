import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectStateDialogComponent } from './select-state-dialog.component';

describe('SelectStateDialogComponent', () => {
  let component: SelectStateDialogComponent;
  let fixture: ComponentFixture<SelectStateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectStateDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectStateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
