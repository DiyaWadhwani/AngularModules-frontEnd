import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeLoginModel } from '../models/employee-login-model.model';

const headers = new HttpHeaders()
.set('content-type', 'application/json')
.set('Access-Control-Allow-Origin', '*');

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseURL = 'http://localhost:8080/loginEmployee';
  constructor(private httpClient : HttpClient) { }

  loginEmployee(employee : EmployeeLoginModel) : Observable<Object> {
    let body = JSON.stringify(employee);
    return this.httpClient.post<Object>(`${this.baseURL}`,body, {headers});
    // if(employee.empPassword == )
  }

}
