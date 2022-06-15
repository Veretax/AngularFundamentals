import { Routes } from '@angular/router';
import { EventsListComponent } from './events/events-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from "./events/create-events.component";

export const appRoutes:Routes = [
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: 'events/new', component: CreateEventComponent },
  { path: 'events/:id', component: EventDetailsComponent, pathMatch: 'full' },
  { path: 'events', component: EventsListComponent },
  //{ path: 'events/events', redirectTo: '', pathMatch: 'full' },
];
