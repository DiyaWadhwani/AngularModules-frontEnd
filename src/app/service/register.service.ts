import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeRegistrationModel } from '../models/employee-registration-model.model';

const headers = new HttpHeaders()
.set('content-type', 'application/json')
.set('Access-Control-Allow-Origin', '*');

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private baseURL = 'http://localhost:8080/createEmployee';

  constructor(private httpClient : HttpClient) { }

  registerEmployee(employee : EmployeeRegistrationModel) : Observable<Object> {
    let body = JSON.stringify(employee);
    return this.httpClient.post<Object>(`${this.baseURL}`,body, {headers});
    // if(employee.empPassword == )
  }

}
