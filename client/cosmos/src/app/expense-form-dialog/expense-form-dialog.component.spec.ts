import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseFormDialogComponent } from './expense-form-dialog.component';

describe('ExpenseFormDialogComponent', () => {
  let component: ExpenseFormDialogComponent;
  let fixture: ComponentFixture<ExpenseFormDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenseFormDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
