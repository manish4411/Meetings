import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { MeetingDetailsComponent } from './meeting-details/meeting-details.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'meetings', component: MeetingsComponent},
  {path:'details', component:MeetingDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
