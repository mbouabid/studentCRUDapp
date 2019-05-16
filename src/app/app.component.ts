import { Component } from '@angular/core';
import { StudentService } from './services/student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Trainees ApPlication ';
 /* students : any []
  constructor (private studentService : StudentService){
  }
  ngOnInit() {
    this.students=this.studentService.students
  }*/
}
