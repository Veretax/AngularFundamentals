import { Component, OnInit } from '@angular/core'
import { EventService } from "./shared/event.service";
import { ToastrService } from "../common/toastr.service";

declare let toastr:any;

@Component({
  selector: 'events-list',
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
          <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>
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
  events: any[] = [];
  // events = [
  //  { name: 'Angular Connect', date: '9/26/2036', time: '10am', location: { address: '1 London Road ', city: 'London', country: 'England' }, format: "InPerson" },
  //  { name: 'ng-conf 2037', date: '4/15/2037', time: '9am', onlineUrl: 'https://www.ng-conf.org/', format: "Online" },
  //  { name: 'Future Conf (Location/Url TBD)', date: '6/10/2037', time: '8am' },
  //  { name: 'UN Angular Summit', date: '6/10/2037', time: '8am', location: { address: 'The UN Angular Center', city: 'New York', country: 'USA' }, format: "InPerson" }
  //]
  constructor(eventService: EventService,  private toastr: ToastrService) {
    this.eventService = eventService;
  }

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

  handleThumbnailClick(eventName: string) {
    this.toastr.success(eventName);
  }
}
