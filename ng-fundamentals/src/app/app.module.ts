// app module module imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

// app service imports
import { EventService } from './events/shared/event.service';
import { ToastrService } from './common/toastr.service';
import { EventRouteActivatorService } from './events/event-details/event-route-activator.service';

// app component imports
import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { EventAddressComponent } from './events/event-address.component';
import { NavBarComponent } from './nav/nav-bar.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-events.component';
import { Error404Component } from './errors/404.component';



import { appRoutes } from './routes';

@NgModule({
  declarations: [
    EventsAppComponent,
    NavBarComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventAddressComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),

  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivatorService
    ],
  bootstrap: [
    EventsAppComponent
    
  ]
})
export class AppModule { }
