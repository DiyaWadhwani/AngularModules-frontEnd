import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeRegistrationModel } from 'src/app/models/employee-registration-model.model';
import { RegisterService } from 'src/app/service/register.service';


@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent implements OnInit {

  employee : EmployeeRegistrationModel = new EmployeeRegistrationModel();
  showMessage : string = " ";

  constructor(private router : Router, private registerService : RegisterService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.registerService.registerEmployee(this.employee).subscribe(data=> {
      console.log("new user registered !");
    this.router.navigate(['/employee-login']);
    },
    error => {
      this.showMessage = "Please enter valid data";
      console.log(error);
    }
    );
    
  }
}
