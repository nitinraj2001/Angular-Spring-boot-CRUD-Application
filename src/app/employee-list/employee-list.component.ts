import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees : Employee[];

  constructor(private employeeService : EmployeeService, private router : Router) { }

  updateEmployee(id: number){
    this.router.navigate(['update-employee',id]);

  }

  deleteEmployee(id: number){
    this.router.navigate(['delete-employee',id]);

  }

  detailEmployee(id: number){
    this.router.navigate(['detail-employee',id]);

  }

  ngOnInit(): void {
    
    this.employeeService.getEmployeesList().subscribe(data=>this.employees=data);
  }

}