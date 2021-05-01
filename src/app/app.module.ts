import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobListComponent } from './job-list/job-list.component';
import { CreateJobComponent } from './create-job/create-job.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { ContainerComponent } from './component/container/container.component';
import { UpdateJobComponent } from './update-job/update-job.component';
import { ViewJobComponent } from './view-job/view-job.component';
// import { RegisterEmployeeComponent } from './register-employee/register-employee.component';
// import { LoginEmployeeComponent } from './login-employee/login-employee.component';


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
    // RegisterEmployeeComponent,
    // LoginEmployeeComponent,
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

