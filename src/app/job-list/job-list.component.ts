import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobModel } from '../models/job-model.model';
import { JobService } from '../service/job.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  
  jobList : JobModel[];
  constructor(private jobService : JobService, private router : Router) { }

  ngOnInit(): void {
    this.getJobs();
  }

  private getJobs() {
    this.jobService.getJobList().subscribe( data => {
      this.jobList = data;
    });
  }
  
  updateJob(jobID : number) {
    this.router.navigate(['update-job', jobID]);
  }

  deleteJob(jobID : number) {
    this.jobService.deleteJob(jobID).subscribe(data => {
      console.log(data);
      this.getJobs();
    });
  }

  viewJob(jobID : number) {
    this.router.navigate(['view-job', jobID]);
  }
  
}

//dummy data
  //   this.jobList = [ {
  //     "designation" : "Intern",
  //     "experience" : "0 years",
  //     "salary" : 5000,
  //     "hours" : 5,   
  //   },
  //   {
  //     "designation" : "Employee",
  //     "experience" : "1 year",
  //     "salary" : 7000,
  //     "hours" : 7,
  //   }
  // ];