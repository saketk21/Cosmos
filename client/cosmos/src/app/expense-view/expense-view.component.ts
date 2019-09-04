import { Component, OnInit } from '@angular/core';
import { Expense } from '../models/expense.model';
import { ExpenseService } from '../expense.service';
import { categories } from '../models/categories.model';

@Component({
  selector: 'app-expense-view',
  templateUrl: './expense-view.component.html',
  styleUrls: ['./expense-view.component.css']
})
export class ExpenseViewComponent implements OnInit {
  expenses: Expense[];
  constructor(private expenseService: ExpenseService) { }

  ngOnInit() {
    this.getExpenses();
  }

  getExpenses() {
    this.expenseService.getExpenses()
      .subscribe(expenses => {
        this.expenses = expenses;
        console.log(expenses);
      });
  }

  deleteExpense(expense: Expense) {
    const confirmation = confirm('Are you sure you want to delete this expense?');
    if (confirmation) {
      this.expenseService.deleteExpense(expense)
        .subscribe(() => this.getExpenses());
    }
  }
}
