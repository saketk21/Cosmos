import { Injectable } from '@angular/core';
import { Expense } from './models/expense.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  expensesApiUrl = '/api/expenses';
  constructor(private http: HttpClient) { }

  getExpenses() {
    return this.http.get<Expense[]>(this.expensesApiUrl);
  }

  getExpensesByCategory(clickedSliceLabel: string) {
    return this.http.get<Expense[]>(`${this.expensesApiUrl}?category=${clickedSliceLabel}`);
  }

  addExpense(expense: Expense) {
    return this.http.post(this.expensesApiUrl, expense);
  }

  updateExpense(expense: Expense) {
    return this.http.put(`${this.expensesApiUrl}/${expense._id}`, expense);
  }

  deleteExpense(expense: Expense) {
    return this.http.delete(`${this.expensesApiUrl}/${expense._id}`);
  }
}
