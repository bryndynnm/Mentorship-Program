import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { MentorshipProgramComponent } from './client/mentorship-program/mentorship-program.component';
import { MentorHomeComponent } from './client/mentor-home/mentor-home.component';
import { MenteeHomeComponent } from './client/mentee-home/mentee-home.component';
import { MentorshipServiceComponent } from './mentorship-service/mentorship-service.component';
import { EventFormComponent } from './event-form/event-form.component';
import { EventSignupComponent } from './event-signup/event-signup.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MentorshipProgramComponent,
    MentorHomeComponent,
    MenteeHomeComponent,
    MentorshipServiceComponent,
    EventFormComponent,
    EventSignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModalModule, 
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
