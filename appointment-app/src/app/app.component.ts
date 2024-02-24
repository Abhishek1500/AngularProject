import { Component } from '@angular/core';


//selector is html tag name for this component wherever this tag occour code got their
//the spec file is for unit testing
//other is telling the template use the component and stylesheet url
//@Component is something that change the class AppComponent into an Component
//templateUrl is something that will be send or will replace the appcomponent


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//to make a class accessible outside of flie use export typescript is case sensitive
export class AppComponent {
  
  //property
  // by default the value we assign it automattically get the type but to impose=>  title : string = 'appointment-app';
  // array => items=['item','item2']
  title="first One hai"
  /* 
  method 
  log(text:string) :void {
    var arr:number[]
    by default public no int or float number
    this is required
    var mans : type =ghgf;
  }
  */




}

