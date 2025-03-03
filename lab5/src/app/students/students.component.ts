import { Component } from '@angular/core';
import { StudentServiceService } from '../services/student-service.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  imports: [],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent implements OnInit {
  students: any[] = [];

  constructor(private studentService: StudentServiceService) { }

  //API call is async so its best to put that logic here instead of constructor
  ngOnInit(): void {
    this.studentService.getStudentData().subscribe((data) => {
      //console.log(data);
      this.students = data.students;
    });
  }
}
