import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  inactiveToActiveCounter = 0;
  activeToInactiveCounter = 0;

  constructor() { }

  inactiveToActiveCount() {
    this.inactiveToActiveCounter++;
    console.log('Inactive to active: ' + this.inactiveToActiveCounter);
  }

  activeToInactiveCount() {
    this.activeToInactiveCounter++;
    console.log('Active to inactive: ' + this.activeToInactiveCounter);
  }
}
