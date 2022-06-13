import { Component } from '@angular/core';

@Component({
  selector: 'parent',
  template: `
    <div *ngIf="currentCounter">
      <h1>Congratulations!</h1>
      <h3>You set the parent's counter to: {{currentCounter}}</h3>
    </div>
    <child (buttonClick)="handleChildButtonClick($event)"> </child>
  `,

})
export class ParentComponent {
  currentCounter:any

  handleChildButtonClick(value:any) {
    this.currentCounter = value;
  }
}
