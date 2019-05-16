import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentCRUDComponent } from './student-crud/student-crud.component';
import {StudentService} from './services/student.service'

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentDetailsComponent,
    StudentCRUDComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
