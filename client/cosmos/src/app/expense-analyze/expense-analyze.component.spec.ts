import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseAnalyzeComponent } from './expense-analyze.component';

describe('ExpenseAnalyzeComponent', () => {
  let component: ExpenseAnalyzeComponent;
  let fixture: ComponentFixture<ExpenseAnalyzeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenseAnalyzeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseAnalyzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
