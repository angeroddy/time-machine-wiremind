// src/app/core/services/time-machine.service.ts
import { Injectable } from '@angular/core';
import { TimeMachineState, Era, Snapshot } from '../models';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeMachineService {

  can_count = false;
  lastUpdate: number = 0;
  intervalId: any = null;

  
  currentYear = 2025; // ← Année de départ
  velocity = 1;       // années par seconde

  private audioMap: { [key: string]: HTMLAudioElement } = {};


  constructor() {
    this.preloadAudio();
  }

  private preloadAudio() {
    this.audioMap['click'] = new Audio('assets/sounds/click.mp3');
  }

  private playSound(key: string) {
    const audio = this.audioMap[key];
    if (audio) {
      audio.currentTime = 0; // reset
      audio.play();
    }
  }
  playClickSound() {
    this.playSound('click');
  }

  private pause(): void {
    this.can_count = false;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
  private launch(): void {
    this.can_count = true;
    this.lastUpdate = Date.now(); 
    this.intervalId = setInterval(() => {


      const now = Date.now();
      const deltaSeconds = (now - this.lastUpdate) / 1000;
      this.lastUpdate = now;
      this.currentYear += this.velocity * deltaSeconds;


    }, 100);
  }

  toggleCounter() {
    if (this.can_count) {
      // Pause
      this.pause();
    } else {
      // Launch
      this.launch();
    }
  }


  setVelocity(newVelocity: number): void {
    this.velocity = newVelocity;
  }

  increaseVelocity(): void {
    this.velocity += 1;
  }

  decreaseVelocity(): void {
    this.velocity -= 1;
  }

  getCurrentState(): TimeMachineState {
    return {
      currentYear: this.currentYear,
      velocity: this.velocity,
      era: this.getEraByYear(this.currentYear),

    };
  }
  resetMachine(): void {
    this.pause();
    this.currentYear = 2025;
    this.velocity = 0;
    this.clearSnapshots();
  }

  // Logique des ères basée sur l'année
  private getEraByYear(year: number): Era {
    if (year < 0) return { name: 'PREHISTORIC ERA', icon: '🦴', color: '#8B4513' };
    if (year < 1000) return { name: 'ANCIENT ERA', icon: '🏛️', color: '#DAA520' };
    if (year < 1500) return { name: 'MEDIEVAL ERA', icon: '⚔️', color: '#654321' };
    if (year < 1800) return { name: 'RENAISSANCE', icon: '🎭', color: '#CD853F' };
    if (year < 1950) return { name: 'INDUSTRIAL ERA', icon: '🏭', color: '#708090' };
    if (year < 2000) return { name: 'DIGITAL ERA', icon: '💻', color: '#00FF00' };
    if (year < 2100) return { name: 'SPACE AGE', icon: '🚀', color: '#00BFFF' };
    return { name: 'AI SINGULARITY', icon: '🤖', color: '#FF00FF' };
  }


  private snapshotsSubject = new BehaviorSubject<Snapshot[]>([]);
  snapshots$ = this.snapshotsSubject.asObservable();

  snapshots: Snapshot[] = []; // stockage local

  createSnapshot(): void {
    const state = this.getCurrentState();
    this.snapshots.push({
      datetime: new Date().toLocaleString(),
      year: Math.round(state.currentYear),
      velocity: state.velocity,
      era: state.era.name
    });
    
    this.snapshotsSubject.next([...this.snapshots]);
    console.log(this.snapshots);
  }

  getSnapshots(): Snapshot[] {
    return this.snapshots;
  }

  clearSnapshots(): void {
    this.snapshots = [];
  }
}