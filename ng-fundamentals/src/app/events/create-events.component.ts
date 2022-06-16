import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  template: `
      <div class="back">
        <button class="btn btn-info" (click)="returnToEvents()">< Back to Events</button>
      </div>
			<h1>New Event</h1>
      <hr/>
      <div class="col-md-6">
        <h3>[Create Event Form will go here]</h3>
        <br/>
        <br/>
        <button type="submit" class="btn btn-primary">Save</button>
        <button type="button" class="btn btn-default" (click)="cancel()">Cancel</button>
        
      </div>

		`,
  styles: [`
    .back { margin-top:10px; }
	`]
})

export class CreateEventComponent {
  constructor(private router: Router) {

  }

  cancel() {
    this.router.navigate(['/events']);
  }

  returnToEvents() {
    this.router.navigate(['']);
  }
}
