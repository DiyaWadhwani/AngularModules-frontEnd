import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobModel } from '../models/job-model.model';
import { JobService } from '../service/job.service';

@Component({
  selector: 'app-update-job',
  templateUrl: './update-job.component.html',
  styleUrls: ['./update-job.component.css']
})
export class UpdateJobComponent implements OnInit {

  jobID : number;
  job : JobModel = new JobModel();

  constructor(private jobService : JobService, private route : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {

    this.jobID = this.route.snapshot.params['jobID']
    this.jobService.getJobByID(this.jobID).subscribe(data => {
      this.job = data;
    },
    error => console.log(error));
  }


  onSubmit() {
    this.jobService.updateJob(this.jobID, this.job).subscribe(data => {
      this.goToJobList();
    },
    error => console.log(error));
  }

  goToJobList() {
    this.router.navigate(['/jobs']);
  }

}
