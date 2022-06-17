import { Component } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../shared/index';

@Component({
  selector: 'event-details',
  templateUrl: 'event-details.component.html',
  styles: [`
    .container { padding-left: 20px;  padding-right: 20px; }
    .event-image { height: 100px; }
    .hover-pointer:hover { cursor: pointer; }
  `]
})

export class EventDetailsComponent {
    event: IEvent | undefined;
    reviewed: boolean=false;

  constructor(private eventService: EventService, private route:ActivatedRoute) {

  }
  ngOnInit(): any {
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
  }
}
