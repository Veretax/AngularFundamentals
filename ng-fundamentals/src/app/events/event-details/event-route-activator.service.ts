import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router/router';
import { Observable } from 'rxjs';

@Injectable()
export class EventRouteActivatorService implements CanActivate {
  constructor(private eventService: EventService, private router:Router) {

  }

  canActivate(route: ActivatedRouteSnapshot) {
    const eventExists = !!this.eventService.getEvent(+route.params['id']);

    if (!eventExists) {
      this.router.navigate([ '/404' ]);
    }

    return eventExists;
  }
}
