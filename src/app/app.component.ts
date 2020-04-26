import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'todolist';
  name:string = 'Josue';
  
  constructor(){
    this.name = 'David!';
  }

  changeName(name:string):void {
    this.name = name;
  }
}
