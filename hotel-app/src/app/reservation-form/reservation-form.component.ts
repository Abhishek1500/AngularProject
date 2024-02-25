import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';
import { Router,ActivatedRoute } from '@angular/router';
//activated route is to see what is above in url
@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {
  reservationForm :FormGroup =new FormGroup({});
  

  //dependecy injection
  constructor(private formBuilder:FormBuilder,
    private reservationService:ReservationService,
    private router:Router,
    private activatedRoute: ActivatedRoute){}
  
  ngOnInit(): void {
    this.reservationForm=this.formBuilder.group({
      //first value is Initial value of the control
      //second is validator if want to add multiple validator add it in array
      //Validators.Required means value should be given
      checkInDate:['',Validators.required],
      checkOutDate:['',Validators.required],
      guestName:['',Validators.required],
      guestEmail:['',[Validators.required,Validators.email]],
      roomNumber:['',Validators.required],
    })

    let id=this.activatedRoute.snapshot.paramMap.get('id');
    console.log(id);
    if(id){
      let reservation=this.reservationService.getReservation(id).subscribe(reservation=>{
        if(reservation)//this is to add the values to the form patching means when we update these values will be shown
        this.reservationForm.patchValue(reservation)
      });
    }
  }

  onSubmit():void{
    if(this.reservationForm.valid){
      //can get particular using this.reservationForm.get('checkInDate).value
      let reservation:Reservation=this.reservationForm.value;
      console.log("hell");
      let id=this.activatedRoute.snapshot.paramMap.get('id');
      console.log(id);
      if(id){
        this.reservationService.updateReservation(id,reservation).subscribe(()=>{
          console.log("Updated the request")
        })
      }else{
        this.reservationService.addReservation(reservation).subscribe(()=>{
          console.log("Added the data")
      })
      }
      //here just on submit the user get navigated
      this.router.navigate(['/list'])
    }
  }
}
