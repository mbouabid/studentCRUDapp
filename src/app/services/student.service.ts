import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  students = [
    {
      fname: 'Salah ',
      lname : 'Samiha',
      speciality: 'TI',
      renumeration: 300
    },
    {
      fname: 'Krisaane',
      lname : 'Houda',
      speciality: 'TI',
      renumeration: 400
    },
    {
      fname: 'Hajji',
      lname : 'Marwa',
      speciality: 'AA',
      renumeration: 350
    }
  ];

  riseRenum() {
    for (const student of this.students) {
      student.renumeration = student.renumeration*1.1;
    }
  }

  addStudent (fname: string, lname: string, speciality: string) {
    const studentObj = {
      fname : fname,
      lname : lname,
      renumeration : 0.0,
      speciality : speciality
    };
    this.students.push(studentObj);
    console.log( this.students);
  }
}
