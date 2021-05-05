import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  constructor(private route : ActivatedRoute, _router : Router) { }

  function : string;
  title = "Wolken Job Portal";
  navDisplay : string = "Register";
  pathName : string = " ";
  // _router : string;

  ngOnInit(): void {
    let body = JSON.stringify(this.route.url);
    // console.log("URL : " + this.route.snapshot.params); 
    console.log("URL : "+window.location.pathname);

    this.pathName = window.location.pathname;

    if(this.pathName == '/employee-login') {
      this.navDisplay == "Register";
    }
    else if(this.pathName == '/employee-registration') {
      this.navDisplay == "Login";
    }

  }

}
