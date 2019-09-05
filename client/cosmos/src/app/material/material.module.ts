import { NgModule } from '@angular/core';
import { MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatListModule, MatCardModule, MatDialogModule, MatTooltipModule, MatFormFieldModule, MatSelectModule, MatOptionModule, MatInputModule } from '@angular/material';

const material = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatCardModule,
  MatDialogModule,
  MatTooltipModule,
  MatFormFieldModule,
  MatSelectModule,
  MatOptionModule,
  MatInputModule
];

@NgModule({
  imports: material,
  exports: material
})
export class MaterialModule { }
