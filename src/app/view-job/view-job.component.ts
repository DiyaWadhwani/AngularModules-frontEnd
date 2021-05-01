import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobModel } from '../models/job-model.model';
import { JobService } from '../service/job.service';

@Component({
  selector: 'app-view-job',
  templateUrl: './view-job.component.html',
  styleUrls: ['./view-job.component.css']
})
export class ViewJobComponent implements OnInit {

  jobID : number;
  job : JobModel;
  constructor(private route : ActivatedRoute, private jobService : JobService, private router : Router) { }

  ngOnInit(): void {
    this.jobID = this.route.snapshot.params['jobID'];
    this.job = new JobModel();
    this.jobService.getJobByID(this.jobID).subscribe(data => {
      this.job = data;
    });
  }

  goToJobList() {
    this.router.navigate(['/jobs']);
  }

}
