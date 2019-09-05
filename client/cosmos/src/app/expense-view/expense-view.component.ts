import { Component, OnInit } from '@angular/core';
import { Expense } from '../models/expense.model';
import { ExpenseService } from '../expense.service';
import { categories } from '../models/categories.model';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ExpenseFormDialogComponent } from '../expense-form-dialog/expense-form-dialog.component';

@Component({
  selector: 'app-expense-view',
  templateUrl: './expense-view.component.html',
  styleUrls: ['./expense-view.component.css']
})
export class ExpenseViewComponent implements OnInit {
  expenses: Expense[];
  constructor(
    private dialog: MatDialog,
    private expenseService: ExpenseService
  ) { }

  ngOnInit() {
    this.getExpenses();
  }

  getExpenses() {
    this.expenseService.getExpenses()
      .subscribe(expenses => {
        this.expenses = expenses;
      });
  }

  addExpense(expense: Expense) {
    this.expenseService.addExpense(expense)
      .subscribe(() => this.getExpenses());
  }

  updateExpense(expense: Expense) {
    this.expenseService.updateExpense(expense)
      .subscribe(() => this.getExpenses());
  }

  deleteExpense(expense: Expense) {
    const confirmation = confirm('Are you sure you want to delete this expense?');
    if (confirmation) {
      this.expenseService.deleteExpense(expense)
        .subscribe(() => this.getExpenses());
    }
  }

  openDialog(expense?: Expense) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.data = expense || new Expense();
    const dialogRef = this.dialog.open(ExpenseFormDialogComponent, dialogConfig);
    dialogRef.afterClosed()
      .subscribe(expense => {
        if (expense) {
          if (expense._id) {
            this.updateExpense(expense);
          }
          else {
            this.addExpense(expense);
          }
        }
      });
  }
}