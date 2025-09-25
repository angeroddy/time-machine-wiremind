import { Component, OnInit } from '@angular/core';
import { YearDisplay } from "../year-display/year-display";
import { SnapshotTable } from "../snapshot-table/snapshot-table";
import { VelocityControl } from "../velocity-control/velocity-control";
import Swal from 'sweetalert2';
import { TimeMachineService } from '../../../../core/services/time-machine.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-time-machine-container',
  imports: [YearDisplay, SnapshotTable, VelocityControl, CommonModule],
  templateUrl: './time-machine-container.html',
  styleUrl: './time-machine-container.css'
})
export class TimeMachineContainer implements OnInit {
  constructor(
    public timeMachine: TimeMachineService,) { }


  ngOnInit() {
    this.showWelcomeAlert();
  }

  showWelcomeAlert() {
    Swal.fire({
      title: 'Welcome to Our App!',
      text: 'Hello! Here is a time machine! Use it to travel through the ages and have fun!',
      imageUrl: 'assets/images/machine.png', 
      imageWidth: 500,
      imageHeight: 400,
      background: '#000000',
      imageAlt: 'Welcome to Time Machine',
      confirmButtonText: 'Start',
      color: '#ffffff',
      confirmButtonColor: ' #7AF914',
      allowOutsideClick: false, 
      backdrop: true,
      
    });
  }
}
