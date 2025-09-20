import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TimeMachineContainer } from "./features/time-machine/components/time-machine-container/time-machine-container";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TimeMachineContainer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('time-machine-wiremind');
}
