import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './Employee/employee.component';

import {FormsModule} from '@angular/forms'
import { EmployeeListComponent } from './EmployeeList/employeeList.component';
import { EmployeeTitlePipe } from './EmployeeList/employeeTitle.pipe';
import { StatelistComponent } from './statelist/statelist.component';

@NgModule({
  declarations: [
    AppComponent,EmployeeComponent,EmployeeListComponent,EmployeeTitlePipe, StatelistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
