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

    if(this.employee.empPassword != this.employee.empConfirmPassword) {
      console.log("Password : "+this.employee.empPassword);
      console.log("Conf Password : "+this.employee.empConfirmPassword);
      console.log("Passwords do not match");
      this.showMessage = "Passwords do not match";
    }
    // else if(this.employee.empFname || this.employee.empUname || this.employee.empEmail || this.employee.empContact || this.employee.empCompany || this.employee.empDesignation || this.employee.empPassword || this.employee.empConfirmPassword) {

    // }
    else {
      this.registerService.registerEmployee(this.employee).subscribe(data=> {
        console.log("new user registered !");
      this.router.navigate(['/employee-login']);
      },
      error => {
        this.showMessage = "User already exists";
        console.log(error);
      }
      );
    }
    
    
  }
}
