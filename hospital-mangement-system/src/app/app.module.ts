import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import {HttpClient, HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/user/user.component';
import { HeaderComponent } from './components/header/header.component';
import { ForbiddenComponent } from './components/forbidden/forbidden.component'
import { RouterModule } from '@angular/router';
import { AuthGuard } from './_auth/auth.guard';
import { AuthInterceptor } from './_auth/auth.interceptor';
import { UserService } from './_services/user.service';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { ChatComponent } from './components/chat/chat.component';
import { MedicalCenterDetailsComponent } from './components/medical-center-details/medical-center-details.component';
import { UpdateMedicalCenterComponent } from './components/update-medical-center/update-medical-center.component';
import { CreateMedicalCenterComponent } from './components/create-medical-center/create-medical-center.component';
import { AppointmentDetailsComponent } from './components/appointment-details/appointment-details.component';
import { CreateAppointmentComponent } from './components/create-appointment/create-appointment.component';
import { UpdateAppointmentComponent } from './components/update-appointment/update-appointment.component';
import { PatientDetailsComponent } from './components/patient-details/patient-details.component';
import { CreatePatientComponent } from './components/create-patient/create-patient.component';
import { UpdatePatientComponent } from './components/update-patient/update-patient.component';
import { AssignPatientComponent } from './components/assign-patient/assign-patient.component';
import { TreatmentDetailsComponent } from './components/treatment-details/treatment-details.component';
import { UpdateTreatmentComponent } from './components/update-treatment/update-treatment.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { ReceptionistComponent } from './components/receptionist/receptionist.component';
 
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AdminComponent,
    UserComponent,
    HeaderComponent,
    ForbiddenComponent,
    CreateAccountComponent,
    ChatComponent,
    MedicalCenterDetailsComponent,
    UpdateMedicalCenterComponent,
    CreateMedicalCenterComponent,
    AppointmentDetailsComponent,
    CreateAppointmentComponent,
    UpdateAppointmentComponent,
    PatientDetailsComponent,
    CreatePatientComponent,
    UpdatePatientComponent,
    AssignPatientComponent,
    TreatmentDetailsComponent,
    UpdateTreatmentComponent,
    DoctorComponent,
    ReceptionistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   // HttpCleintModule,
   HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    AuthGuard,
    // {
    //     provide:HTTP_INTERCEPTORS,
    //     useClass:AuthInterceptor,
    //     multi:true
    // }
    // ,
    UserService ,
   // RestAPIService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
