import { Component } from '@angular/core';

@Component({
  selector: 'event-details',
  templateUrl: './event-details.component.html',
  styles: [`
    .outer { display: inline-block; }
    .inner { margin-top: 30px; }
    .values { margin-left: 10px; }
    div.event-label { font-weight: 900; }
  `]
})
export class EventDetailsComponent {
  event = {name:'ngConf 2025', date: '3/1/2025', time: '8am', location: {address: '123 Main St', city: 'Salt Lake City, UT', country: 'USA'}}
}
