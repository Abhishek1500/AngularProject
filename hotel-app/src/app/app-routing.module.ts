import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';

//here we are telling that whenever the path is going to be like this go to this component or that component
const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"list",component:ReservationListComponent},
  {path:"new",component:ReservationFormComponent},
  {path:"edit/:id",component:ReservationFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
