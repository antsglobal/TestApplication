
import {Component} from "@angular/core"

@Component({
  selector:`my-app`,
  templateUrl: './app.component.html'
})

export class AppComponent
{
    name : string = "Prakash";
    age:number = 10;
    group:number = 10;
}


// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'MyApp';
// }
