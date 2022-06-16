import { Routes } from '@angular/router';
import { EventsListComponent } from './events/events-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-events.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { EventListResolver } from './events/shared/event-list-resolver-service';

export const appRoutes:Routes = [
  { path: '404', component: Error404Component },
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
  {
    path: 'events', component: EventsListComponent,
    resolve: { events:EventListResolver}
  },
  {
    path: 'events/:id',
    component: EventDetailsComponent,
    canActivate: [EventRouteActivator],
  },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
 // { path: '**', component: Error404Component }
  //{ path: 'events/events', redirectTo: '', pathMatch: 'full' },
  // angular 8 way { path:'user', loadChildren: './user/user.module#UserModule'}
  {
    path: 'user',
    loadChildren: () => import('./user/user.module')
      .then(m => m.UserModule)
  }
];
