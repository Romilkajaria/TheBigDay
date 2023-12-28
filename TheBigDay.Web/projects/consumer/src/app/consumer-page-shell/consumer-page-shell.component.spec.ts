import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerPageShellComponent } from './consumer-page-shell.component';

describe('ConsumerPageShellComponent', () => {
  let component: ConsumerPageShellComponent;
  let fixture: ComponentFixture<ConsumerPageShellComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsumerPageShellComponent]
    });
    fixture = TestBed.createComponent(ConsumerPageShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
