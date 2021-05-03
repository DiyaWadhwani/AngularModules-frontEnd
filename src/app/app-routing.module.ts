import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateJobComponent } from './create-job/create-job.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { JobListComponent } from './job-list/job-list.component';
import { UpdateJobComponent } from './update-job/update-job.component';
import { ViewJobComponent } from './view-job/view-job.component';

const routes: Routes = [
  {path : 'employee-login', component : EmployeeLoginComponent},
  {path : 'employee-registration', component : EmployeeRegistrationComponent},
  {path : 'jobs', component : JobListComponent },
  {path : 'create-job', component : CreateJobComponent},
  {path : '', redirectTo : 'employee-login', pathMatch : 'full'},
  {path : 'update-job/:jobID', component : UpdateJobComponent},
  {path : 'view-job/:jobID', component : ViewJobComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
