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

  deleteExpense(expense: Expense) {
    return this.http.delete(`${this.expensesApiUrl}/${expense._id}`);
  }
}
