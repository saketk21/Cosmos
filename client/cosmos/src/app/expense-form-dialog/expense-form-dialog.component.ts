import { Component, OnInit, Inject } from '@angular/core';
import { Expense } from '../models/expense.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-expense-form-dialog',
  templateUrl: './expense-form-dialog.component.html',
  styleUrls: ['./expense-form-dialog.component.css']
})
export class ExpenseFormDialogComponent implements OnInit {
  categories = ['Cash', 'Bills', 'Food', 'Shopping', 'Fuel'];
  expenseModel: Expense;
  constructor(private dialogRef: MatDialogRef<ExpenseFormDialogComponent>, @Inject(MAT_DIALOG_DATA) expenseData) {
    this.expenseModel = expenseData;
  }

  ngOnInit() {
  }

  save() {
    this.dialogRef.close(this.expenseModel);
  }
}
