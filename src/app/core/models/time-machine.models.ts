// src/app/core/models/time-machine.models.ts
export interface Snapshot {
 datetime: string;
  year: number;
  velocity: number;
  era: string;
}

export interface Era {
  name: string;
  icon: string;
  color: string;
}

export interface TimeMachineState {
  currentYear: number;
  velocity: number;
  era: Era;
}