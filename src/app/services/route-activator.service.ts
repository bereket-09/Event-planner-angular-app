import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EventService } from './event.service';

@Injectable({
  providedIn: 'root'
})
export class RouteActivatorService implements CanActivate {

  constructor(private eventService:EventService,private route:Router) { }

  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    const eventExist=!!this.eventService.getEvent(+route.params['id'])

     if(!eventExist){
      this.route.navigate(['/404'])
      return eventExist;
     }
     return true;
  }
}
