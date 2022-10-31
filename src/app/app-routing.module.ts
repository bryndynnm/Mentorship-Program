import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenteeHomeComponent } from './client/mentee-home/mentee-home.component';
import { MentorHomeComponent } from './client/mentor-home/mentor-home.component';
import { MentorshipProgramComponent } from './client/mentorship-program/mentorship-program.component';
import { EventFormComponent } from './event-form/event-form.component';
import { EventSignupComponent } from './event-signup/event-signup.component';

const routes: Routes = [
  { path: '', redirectTo: '/mentorship', pathMatch: 'full'},
  { path: 'mentorship', component: MentorshipProgramComponent },
  { path: 'mentor', component: MentorHomeComponent },
  { path: 'mentee', component: MenteeHomeComponent },
  { path: 'event', component: EventFormComponent },
  { path: 'signup', component: EventSignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
