import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//this make it injectable which means we can use it anywhere using dependency injection
@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private apiUrl="http://localhost:3001"
  private reservations: Reservation[]=[];

  constructor(private http:HttpClient){}
  //this constructor will be called before ngOnInit lifecycle hook
  // constructor(){
  //   let savedReservations=localStorage.getItem("reservations");
  //   this.reservations=savedReservations?JSON.parse(savedReservations):[];
  // }
  //Crud method are written here

  getReservations():Observable<Reservation[]>{
    return this.http.get<Reservation[]>(this.apiUrl+"/reservations");
  }

  //might be we dont get value that we wnt in that case we are returning undefined
  getReservation(id :string):Observable<Reservation>{
    return this.http.get<Reservation>(this.apiUrl+"/reservation/"+id);
  }

  addReservation(reservation: Reservation):Observable<void>{
    //url,body
    return this.http.post<void>(this.apiUrl+"/reservation",reservation);
    
    // reservation.id=Date.now().toString();
    // this.reservations.push(reservation);
    // localStorage.setItem("reservations",JSON.stringify(this.reservations));
  }


  deleteReservation(id :string):Observable<void>{
    return this.http.delete<void>(this.apiUrl+"/reservation/"+id);
    // let index=this.reservations.findIndex(res=>res.id===id);
    // this.reservations.splice(index,1);
    // // localStorage.setItem("reservations",JSON.stringify(this.reservations));
  }

  updateReservation(id:string ,updateReservation: Reservation):Observable<void>{
    return this.http.put<void>(this.apiUrl+"/reservation/"+id,updateReservation);
    
    // let index=this.reservations.findIndex(res=>res.id===id);
    // this.reservations[index]=updateReservation;
    // localStorage.setItem("reservations",JSON.stringify(this.reservations));
  }


}
