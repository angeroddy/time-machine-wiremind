import { Component, Input } from '@angular/core';

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
  @Input() era: Era = {
    name: 'DIGITAL ERA',
    icon: '💻',
    color: '#00ff00'
  };

    get formattedYear(): string {
    return Math.round(this.year).toString();
  }
}
