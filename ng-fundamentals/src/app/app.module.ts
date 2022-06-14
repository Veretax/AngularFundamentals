import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EventsAppComponent } from './events-app.component';
import { EventService } from "./events/shared/event.service";
import { ToastrService } from "./common/toastr.service";
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { EventAddressComponent } from './events/event-address.component';
import { NavBarComponent } from "./nav/nav-bar.component";

@NgModule({
  declarations: [
    EventsAppComponent,
    NavBarComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventAddressComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    EventService,
    ToastrService,
    ],
  bootstrap: [
    EventsAppComponent
    
  ]
})
export class AppModule { }
