import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservedValueOf } from 'rxjs';
import { JobModel } from '../models/job-model.model';

const headers = new HttpHeaders()
.set('content-type', 'application/json')
.set('Access-Control-Allow-Origin', '*');

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private baseURL = "http://localhost:8080/jobs";

  constructor(private httpClient : HttpClient) { }

  createJob(job: JobModel) : Observable<Object> {
    let body = JSON.stringify(job);
    console.log("this is body "+body);
    return this.httpClient.post(`${this.baseURL}`, body, {headers});
  }

  getJobByID( jobID : number) : Observable<JobModel> {
    return this.httpClient.get<JobModel>(`${this.baseURL}/${jobID}`);
  }

  updateJob(jobID : number, job : JobModel) : Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${jobID}`, job);
  }

  deleteJob(jobID : number) : Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${jobID}`);
  }

  getJobList() : Observable<JobModel[]> {
    return this.httpClient.get<JobModel[]>(`${this.baseURL}`,{headers});
  }
}
