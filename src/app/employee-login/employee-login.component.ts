import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeLoginModel } from '../models/employee-login-model.model';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent implements OnInit {

  employee : EmployeeLoginModel = new EmployeeLoginModel();
  // loggedIn : EmployeeLoginModel = new EmployeeLoginModel();
  buttonType : string;
  showMessage : string = "";
  // touched : FormControl;
  // dirty : FormControl;

  constructor(private router : Router, private loginService : LoginService) { }

  ngOnInit(): void {
  }

  onSubmit(buttonType) : void {

    this.buttonType = buttonType;
    if(this.buttonType == 'Login') {

      this.loginService.loginEmployee(this.employee).subscribe(data => {
        this.router.navigate(['/jobs']);
      },
      error => {
        this.showMessage = "Username or Password is incorrect";
        console.log(error);}
      );
      // console.log(this.employee);
      console.log("logged in");
      // this.router.navigate(['/jobs']);
    
    }
    
    else if(this.buttonType == 'Register') {

      this.router.navigate(['/employee-registration']);
    }
  }
}
