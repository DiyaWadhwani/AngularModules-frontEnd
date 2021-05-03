import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobListComponent } from './component/job-list/job-list.component';
import { CreateJobComponent } from './component/create-job/create-job.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { ContainerComponent } from './component/container/container.component';
import { UpdateJobComponent } from './component/update-job/update-job.component';
import { ViewJobComponent } from './component/view-job/view-job.component';
import { EmployeeLoginComponent } from './component/employee-login/employee-login.component';
import { EmployeeRegistrationComponent } from './component/employee-registration/employee-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    JobListComponent,
    CreateJobComponent,
    HeaderComponent,
    FooterComponent,
    ContainerComponent,
    UpdateJobComponent,
    ViewJobComponent,
    EmployeeLoginComponent,
    EmployeeRegistrationComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}

