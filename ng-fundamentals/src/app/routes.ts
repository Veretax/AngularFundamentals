import { Routes } from '@angular/router';
import { EventsListComponent } from './events/events-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-events.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivatorService } from './events/event-details/event-route-activator.service';

export const appRoutes:Routes = [
  { path: '404', component: Error404Component },
  { path: 'events/new', component: CreateEventComponent },
  { path: 'events', component: EventsListComponent },
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService]},
  { path: '', redirectTo: '/events', pathMatch: 'full' },
 // { path: '**', component: Error404Component }
  //{ path: 'events/events', redirectTo: '', pathMatch: 'full' },
];
