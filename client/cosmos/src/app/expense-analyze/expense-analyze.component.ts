import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { ExpenseService } from '../expense.service';
import { Expense } from '../models/expense.model';

@Component({
  selector: 'app-expense-analyze',
  templateUrl: './expense-analyze.component.html',
  styleUrls: ['./expense-analyze.component.css']
})
export class ExpenseAnalyzeComponent implements OnInit {
  public expensesOfClickedCategory: Expense[];
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'bottom',
    }
  };
  public pieChartLabels: string[] = ['Bills', 'Cash', 'Food', 'Shopping', 'Fuel'];
  public pieChartData: number[] = [0, 0, 0, 0, 0];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartColors = [
    {
      backgroundColor: ['#1bec0866', '#2d87ed66', '#ff464666', '#9415dd66', '#ff880066'],
    },
  ];

  constructor(private expenseService: ExpenseService) {
  }

  ngOnInit() {
    this.fetchExpensesByCategory();
  }

  fetchExpensesByCategory() {
    this.expenseService.getExpenses()
      .subscribe(expenses => {
        const pieChartAggregatedData = [0, 0, 0, 0, 0];
        expenses.forEach(expense => {
          let category = 0;
          switch (expense.category) {
            case 'Bills':
              category = 0;
              break;
            case 'Cash':
              category = 1;
              break;
            case 'Food':
              category = 2;
              break;
            case 'Shopping':
              category = 3;
              break;
            case 'Fuel':
              category = 4;
              break;
          }
          pieChartAggregatedData[category] += expense.amount;
        });
        console.log('Aggregated Data:', pieChartAggregatedData);
        this.pieChartData = pieChartAggregatedData;
      });
  }
  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: any[] }): void {
    console.log(event, active);
    const clickedSliceLabel = active[0]._chart.config.data.labels[active[0]._index];
    this.expenseService.getExpensesByCategory(clickedSliceLabel)
      .subscribe(expenses => {
        this.expensesOfClickedCategory = expenses;
        console.log(this.expensesOfClickedCategory);
      });
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: any[] }): void {
    console.log(event, active);
  }
}
