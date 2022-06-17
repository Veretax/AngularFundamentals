import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IEvent, EventService } from './shared/index';

@
Component({
  templateUrl: './create-event.component.html',
  //template: `
  //    <div class="back">
  //      <button class="btn btn-info" (click)="returnToEvents()">< Back to Events</button>
  //    </div>
		//	<h1>New Event</h1>
  //    <hr/>
  //    <div class="col-md-6">
  //      <h3>[Create Event Form will go here]</h3>
  //      <br/>
  //      <br/>
  //      <button type="submit" class="btn btn-primary">Save</button>
  //      <button type="button" class="btn btn-default" (click)="cancel()">Cancel</button>
        
  //    </div>

		//`,
  styles: [`
    .back { margin-top:10px; }
    form { margin-top: 10px; }
    label { display: block; }
    .form-group { margin-top: 5px; }
	`]
})

export class CreateEventComponent
{
  name!: string;
  date!: Date;
  time!: string;
  price!: number;
  address!: string;
  city!: string;
  country!: string;
  imageUrl!: string;
  onlineUrl!: string;

  isDirty: boolean = true;
  constructor(private eventService:EventService, private router: Router) {

  }

  saveEvent(event: IEvent)
  {
    this.eventService.saveEvent(event);
    this.router.navigate(['/events']);
  }
  cancel() {
    this.router.navigate(['/events']);
  }

  returnToEvents() {
    this.router.navigate(['']);
  }
}
