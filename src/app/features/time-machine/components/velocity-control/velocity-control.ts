import { Component } from '@angular/core';

@Component({
  selector: 'app-velocity-control',
  imports: [],
  templateUrl: './velocity-control.html',
  styleUrl: './velocity-control.css'
})
export class VelocityControl {
  velocity = 0;

  

  IncrementVelocity(){
    this.velocity ++;
  }
  DecrementVelocity(){
    this.velocity--;
  }
}
