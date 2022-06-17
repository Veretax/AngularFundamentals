// app module module imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventAddressComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventService,
  EventRouteActivator,
  
} from './events/index';
// app service imports
import { ToastrService } from './common/toastr.service';

// app component imports
import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/nav-bar.component';
import { Error404Component } from './errors/404.component';



import { appRoutes } from './routes';
import { EventListResolver as EventsListResolver } from './events/shared/event-list-resolver-service';
import { FormsModule } from '@angular/forms';
import { AuthService } from './user/auth.service';

@
NgModule({
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
    FormsModule,
    RouterModule.forRoot(appRoutes, { useHash: true, onSameUrlNavigation: 'reload', relativeLinkResolution: 'corrected'}),
   // RouterModule.forRoot(appRoutes, { useHash: true }),

  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    },
    EventsListResolver,
    AuthService,

  ],
  bootstrap: [
    EventsAppComponent
    
  ]
})
export class AppModule { }


export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this event, do you really want to cancel?');
  }
  return true;
}
