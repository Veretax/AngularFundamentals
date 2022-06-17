import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared/index';

declare let toastr:any;

@Component({
  //templateUrl: 'events-list.component.html',
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr />
          <div class="legend">
            <span class="in-person">In Person</span> <span class="online">Online</span> <span class="hybrid">Hybrid</span> <span class="tbd">TBD</span>
          </div>
      <div class="row">
        <div *ngFor="let event of events" class="col-md-5">
          <event-thumbnail [event]="event"></event-thumbnail>
        </div>
      </div>
    </div>
  `,
  styles: [`
    div.legend { padding-bottom: 15px; padding-left: 15px;}
    .legend span { padding-right: 30px; }
    .in-person { color: green; }
    .hybrid { color: yellow; }
    .online { color: red; }
    .tbd { color: #aaa; }
    .thumbnail { margin-top:10px; padding-top:5px; }
    .label { font-size:14px; margin-bottom:10px; display:inline-block; }
    th, td { font-size: 16px; padding:5px 10px;}
  `]
})

export class EventsListComponent implements OnInit{
  eventService: EventService;
  events: IEvent[] = [];

  constructor(eventService: EventService,  private toastr: ToastrService, private route:ActivatedRoute) {
    this.eventService = eventService;
  }

  ngOnInit(): void {
    // commented out as the resolver in routes takes care of this
    //this.events = this.eventService.getEvents().subscribe(
    //    ( events: any ) => {
    //    this.events = events;
    //  }
    //);
    this.events = this.route.snapshot.data['events'];

  }

  handleThumbnailClick(eventName: string): void {
    this.toastr.success(eventName);
  }
}
