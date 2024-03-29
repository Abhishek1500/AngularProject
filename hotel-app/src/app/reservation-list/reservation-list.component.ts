import { Component,OnInit } from '@angular/core';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent {
  reservations:Reservation[]=[];
  
  constructor(private reservationService: ReservationService){}
  
  ngOnInit():void{
    //asynchronously working
    this.reservationService.getReservations().subscribe(reservations=>{
      this.reservations=reservations
    });
  }

  deleteReservation(id:string) :void{
    this.reservationService.deleteReservation(id).subscribe(()=>{
      console.log("deleted the process");
    });
  }
}
