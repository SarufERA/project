import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../../shared/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor( public employeeService: EmployeeService) { }

  departments = [
    { id: 3, value: 'Dep 1' },
    { id: 2, value: 'Dep 2' },
    { id: 3, value: 'Dep 3' }];



  ngOnInit() {
  }

  onClear() {
    this.employeeService.form.reset();
    this.employeeService.initializeFormGroup();
  }

}
