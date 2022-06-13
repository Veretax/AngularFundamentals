import { Component } from '@angular/core';

@Component({
  selector: 'parent',
  template: `
    <child #child1></child>
    <button class="btn btn-primary" (click)="child1.toggleTimer()"> {{ child1.timerButtonText }} </button>
    <button class="btn btn-warning text-secondary" (click)="child1.resetTimer()"> {{ child1.resetTimerText }} </button>
  `
})
export class ParentComponent {

}
