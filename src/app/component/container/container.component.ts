import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  constructor(private route : ActivatedRoute, private router : Router) { 

    this.router.events.subscribe((ev) => {


      if(ev instanceof NavigationEnd) {
        console.log("Instance of Navigation end: " +ev);
        this.currPath = ev.url;
        if(ev.url == '/employee-login') {
          this.navDisplay = 'Register';
        }
        else if(ev.url == '/employee-registration') {
          this.navDisplay = 'Login';
        }
        else if(ev.url == '/jobs') {
          this.navDisplay = 'Logout';
        }
      }
    });

    // console.log("Router URL : " +this.router.url);
    // console.log("href : " +window.location.href);
    // if(this.router.isActive('/',true)) {
    //   console.log(this.pathName);
    // }
    // else if(this.router.isActive('/employee-login',true)){
    //   console.log(this.pathName);
    // }
    // else if(this.router.isActive('/employee-registration', true)) {
    //   console.log(this.pathName);
    // }
  }

  function : string;
  title = "Wolken Job Portal";
  // displayLogin : string = "Login";
  // displayRegister : string = "Register";
  navDisplay : string = "Registration";
  url : string = window.location.href;
  currPath : string;

  ngOnInit(): void {

    console.log("Path Name : "+window.location.pathname);
    this.url = window.location.href;
    console.log("Href prop : "+this.url);

    // if(this.pathName == '/employee-login') {
    //   this.navDisplay = "Register";
    // }
    // else if (this.pathName == '/employee-registration' || this.pathName == '/') {
    //   this.navDisplay = "Login";
    // }
        // if(this.router.url == '/' || this.router.url)
  }
}
