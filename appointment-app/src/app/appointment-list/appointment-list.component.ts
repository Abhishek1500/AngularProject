import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})

//onInit is on Initialization lifecyclehook that run then component initialize
export class AppointmentListComponent implements OnInit {
  newAppointmentTitle: string="";
  newAppointmentDate:Date=new Date();
  appointments:Appointment[]=[];
  
  
  ngOnInit(): void {
    let savedAppointments=localStorage.getItem("appointments");

    //check for null
    this.appointments=savedAppointments?JSON.parse(savedAppointments):[];
  }
  
  
  addAppointment() :void{
    if(this.newAppointmentTitle.trim().length && this.newAppointmentDate){
      let newAppointment:Appointment={
        id:Date.now(),
        title:this.newAppointmentTitle,
        date:this.newAppointmentDate
      }
      this.appointments.push(newAppointment);
      this.newAppointmentTitle="";
      this.newAppointmentDate=new Date();

      //here we will store the data in localstorage but the problem it it remain their
      //even if you load the page again
      localStorage.setItem("appointments",JSON.stringify(this.appointments))
    }
  }

  deleteAppointment(index:number){
    this.appointments.splice(index,1);

    localStorage.setItem("appointments",JSON.stringify(this.appointments));

  }


}
