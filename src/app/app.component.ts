import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //properties
  user = "Urja";
  subject = "english";
  myvar = true   //enabled
  myvar1 = false  //enabled
  mycolor = "#ccc";
  status_class = false;

  //methods
  myfunc(){
    //alert();
    this.user = "aditi";
    this.subject = "maths";
    this.myvar = false // hides from webpage and from console
    this.myvar1 = true // hides from webpage not from console
    this.status_class = true;
  }

  getval(rec){
    console.log("test")
    console.log(rec)
    console.log(rec.value)

  }
}
