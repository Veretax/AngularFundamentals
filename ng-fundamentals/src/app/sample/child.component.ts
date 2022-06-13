import { Component, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'child',
  template: `
    <div *ngIf="timerIsStopped">
      <h1>Congratulations!</h1>
      <h3>You stopped the child component's counter!</h3>
    </div>
    <h3>Child Counter: {{counter}}</h3>
  `
})
export class ChildComponent {
  public timerIsStopped = false;
  public counter = 0;
  private intervalId: any;
  public timerButtonText: string | undefined;
  private stopTimerText: string = 'Stop Timer';
  private startTimerText: string = 'Start Timer';
  public resetTimerText: string = "Reset Timer";

  ngOnInit() {
    this.startTimer();
  }

  resetTimer() {
    this.counter = 0;
  }

  toggleTimer() {
    if (!this.timerIsStopped) {
      this.stopTimer();
      this.timerIsStopped = true;
    } else {
      this.startTimer();
      this.timerIsStopped = false;
    }
  }
  startTimer() {
    this.timerButtonText = this.stopTimerText;
    this.intervalId = setInterval(() => { this.counter++ }, 1000);
    
  }

  stopTimer() {
      this.timerButtonText = this.startTimerText;
      clearInterval(this.intervalId);
      this.timerIsStopped = true;
  }
}
