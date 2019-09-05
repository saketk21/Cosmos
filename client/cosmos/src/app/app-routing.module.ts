import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { ExpenseViewComponent } from './expense-view/expense-view.component';
import { ExpenseAnalyzeComponent } from './expense-analyze/expense-analyze.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'about', component: AboutComponent },
  { path: 'expenses', component: ExpenseViewComponent },
  { path: 'analyze', component: ExpenseAnalyzeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
