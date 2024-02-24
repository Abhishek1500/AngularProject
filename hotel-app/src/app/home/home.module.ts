import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';

//a component can be declared by just only one module not more that that
@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  //here we need to tell the module to 
  //export the component so that the other modules can use it
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
