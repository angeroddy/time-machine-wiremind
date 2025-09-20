import { Component } from '@angular/core';
import { YearDisplay } from "../year-display/year-display";
import { SnapshotTable } from "../snapshot-table/snapshot-table";
import { VelocityControl } from "../velocity-control/velocity-control";

@Component({
  selector: 'app-time-machine-container',
  imports: [YearDisplay, SnapshotTable, VelocityControl],
  templateUrl: './time-machine-container.html',
  styleUrl: './time-machine-container.css'
})
export class TimeMachineContainer {
  
  currentYear = 2087;
  currentEra = {
    name: 'SPACE AGE',
    icon: '🚀',
    color: '#00bfff'
  };


  StartCounting(){
    
  }
}
