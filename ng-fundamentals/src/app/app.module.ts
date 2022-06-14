import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventsAppComponent } from './events-app.component';
import { EventService } from "./events/shared/event.service";
import { EventsListComponent } from './events/events-list.component';
import { EventDetailsComponent } from './events/event-details.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { EventAddressComponent } from './events/event-address.component';
import { ParentComponent } from "./sample/parent.component";
import { ChildComponent } from "./sample/child.component";
import { NavBarComponent } from "./nav/navbar.component";

@NgModule({
  declarations: [
    AppComponent,
    EventsAppComponent,
    NavBarComponent,
    EventsListComponent,
    EventDetailsComponent,
    EventThumbnailComponent,
    EventAddressComponent,
    ParentComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
      EventService
    ],
  bootstrap: [
    AppComponent,
    EventsAppComponent
    
  ]
})
export class AppModule { }
