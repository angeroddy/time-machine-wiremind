import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeMachineService } from '../../../../core/services/time-machine.service';

@Component({
  selector: 'app-velocity-control',
  imports: [CommonModule],
  templateUrl: './velocity-control.html',
  styleUrl: './velocity-control.css'
})
export class VelocityControl {

  constructor(public timeMachine: TimeMachineService) { }
  velocity = 0;

  onVelocityChange(event: any): void {
    const newVelocity = Number(event.target.value);
    if (!isNaN(newVelocity)) {
      this.timeMachine.setVelocity(newVelocity);
    }
  }

  restart(): void {
    this.timeMachine.resetMachine();
    this.timeMachine.playClickSound();
  }

  launch_count(): void {
    this.timeMachine.toggleCounter();
    this.timeMachine.playClickSound();
  }
  increase(): void {
    this.timeMachine.increaseVelocity();
    this.timeMachine.playClickSound();
  }

  decrease(): void {
    this.timeMachine.decreaseVelocity();
    this.timeMachine.playClickSound();
  }

  createCheckpoint() {
    this.timeMachine.createSnapshot();
    
  }


}
