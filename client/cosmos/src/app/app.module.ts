import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';
import { ExpenseViewComponent } from './expense-view/expense-view.component';
import { ExpenseService } from './expense.service';
import { HttpClientModule } from '@angular/common/http';
import { ExpenseFormDialogComponent } from './expense-form-dialog/expense-form-dialog.component';
import { ExpenseAnalyzeComponent } from './expense-analyze/expense-analyze.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AboutComponent,
    ExpenseViewComponent,
    ExpenseFormDialogComponent,
    ExpenseAnalyzeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ExpenseService
  ],
  bootstrap: [AppComponent],
  entryComponents: [ExpenseFormDialogComponent]
})
export class AppModule { }
