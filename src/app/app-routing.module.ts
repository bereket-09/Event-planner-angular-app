import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './errors/404.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventListResolverService } from './services/event-list-resolver.service';
import { RouteActivatorService } from './services/route-activator.service';

 
const routes: Routes = [
  {path:'events',component: EventsListComponent,resolve: {events:EventListResolverService}},
  {path:'events/new',component: CreateEventComponent,canDeactivate:['canDeactivateCreateEvent']},
  {path:'events/:id',component: EventDetailsComponent,canActivate:[RouteActivatorService]},
  {path:'404',component: Error404Component},
  {path:'',redirectTo:'/events', pathMatch:'full'}
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
