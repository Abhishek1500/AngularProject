import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';
import { UserService } from '../user.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
let userService: UserService;
let userserviceSpy:jasmine.Spy;

  beforeEach(async() => {

    await TestBed.configureTestingModule({
      declarations: [UserListComponent],
      //here we are using the Userservice as in provicer so that we can thhen mock it
      providers:[UserService]
    }).compileComponents();
    
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    userService=TestBed.inject(UserService);
    userserviceSpy=spyOn(userService,'getUsers').and.returnValue(of([
      {id:1,name:"john Doe"},
      {id:2,name:"Maria Doe"},
    ]))
    //fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrive users from the UserService on init',()=>{
    fixture.detectChanges();
    expect(userserviceSpy).toHaveBeenCalled();
  })

  it("should retrive user from the userservice when the button clicked",()=>{
    fixture.detectChanges();
    userserviceSpy.calls.reset();

    const button=fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click',null);
    expect(userserviceSpy).toHaveBeenCalled();
  })
});
