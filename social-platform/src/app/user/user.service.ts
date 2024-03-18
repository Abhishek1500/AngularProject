import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users=[{id:1,name:"dfsdf"},
{id:2,name:"kfjsdhf"}];

  constructor() { }

  getUsers(){
    return of(this.users);
  }
}
