import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentService } from '../services/student.service';
import { FLAGS } from '@angular/core/src/render3/interfaces/view';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
defaultSpec = 'TI'
  constructor(private studentService : StudentService) { }

  ngOnInit() {
  }
  onSubmit(form :NgForm){
    //console.log(form.value)
    const fname = form.value['fname'];
    const lname = form.value['lname'];
    const speciality = form.value['speciality'];
    this.studentService.addStudent(fname,lname,speciality)
    

  }

}
