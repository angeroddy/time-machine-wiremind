import { Component, Input } from '@angular/core';
import { TimeMachineService } from '../../../../core/services/time-machine.service';

export interface Era {
  name: string;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-year-display',
  imports: [],
  templateUrl: './year-display.html',
  styleUrl: './year-display.css'
})
export class YearDisplay {
  @Input() year: number = 2025;
  @Input() era: Era | null = null;

  get displayYear(): string {
    return Math.round(this.year).toString();
  }
}
