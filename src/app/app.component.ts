import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title ='olasunkanmi';

  loader:boolean =true;

  constructor(){

    setTimeout(() => {
      this.loader =false;  
    },4000);
  }
}
