import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  let service:UserService;

  //run before each test and here we can mention what we want to do before each test
  beforeEach(()=>{
    TestBed.configureTestingModule({});
    service=TestBed.inject(UserService);
  });

  it("should be created",()=>{
    expect(service).toBeTruthy();
  });

  it("should be users",()=>{
    service.getUsers().subscribe(users=>{
      expect(users.length).toBeGreaterThan(0);
    })
  });


});
