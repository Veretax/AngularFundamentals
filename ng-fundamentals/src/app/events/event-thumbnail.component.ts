import { Component, Input, Output, EventEmitter } from '@angular/core';
import { EventService } from './shared/event.service';

@Component({
  selector: 'event-thumbnail',
  template: `
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
      <!--<h2 [ngClass]="eventService.getTitleClass(event)"><a [routerLink]="[event.id]">{{event?.name}}</a></h2>-->
      <h2 [ngClass]="eventService.getTitleClass(event)">{{event?.name}}</h2>
      <div>Date: {{event?.date}}</div>
      <div [ngClass]="eventService.getStartTimeClass(event)" [ngSwitch]="event?.time">Time: {{event?.time}}
        <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
        <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
        <span *ngSwitchDefault>(Normal Start)</span>
      </div>
      <div>Price: \${{ event?.price }}</div>
      <div [hidden]="!event?.location">
        <span>Location: {{event?.location?.address}}</span>
        <span class="pad-left"></span>
        <span>{{event?.location?.city}}, {{event?.location?.country}}</span>
      </div>
      <div *ngIf="event?.onlineUrl">
        Online URL:  {{event?.onlineUrl }}
      </div>
    </div>
  `,
  styles: [`
    .green { color: #003300 !important; }
    .bold { font-weight: bold; }
    .pad-left { margin-left: 10px; }
    .well div  { color: #bbb; }
    .thumbnail { min-height: 210px; }
    .legend span { padding-right: 30px; }
    .in-person { color: green; }
    .hybrid { color: yellow; }
    .online { color: red; }
    .tbd { color: #aaa; }
  `]
})
export class EventThumbnailComponent {
  eventService: EventService;
  @Input() event: any;

  constructor(eventService: EventService) {
    this.eventService = eventService;
  }

}
