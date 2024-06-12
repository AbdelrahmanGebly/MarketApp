import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SelectComponent } from './components/select/select.component'
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NavbarComponent,
    SpinnerComponent,
    SelectComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  exports:[
    NavbarComponent,
    SpinnerComponent,
    SelectComponent,
    FormsModule,
    RouterModule
  ]
})
export class SharedModule { }
