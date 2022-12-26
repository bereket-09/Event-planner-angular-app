import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './errors/404.component';
import { RouteActivatorService } from './services/route-activator.service';

import {
  EventsListComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventListResolverService,
  LoginComponent
} from './index'
import { CreateSessionComponent } from './events/event-details/create-session/create-session.component';



const routes: Routes = [
  {
    path: 'events',
    component: EventsListComponent,
    resolve: { events: EventListResolverService },
  },
  {
    path: 'events/new',
    component: CreateEventComponent,
    canDeactivate: ['canDeactivateCreateEvent'],
  },
  {
    path: 'events/:id',
    component: EventDetailsComponent,
    canActivate: [RouteActivatorService],
  },
  {
    path: 'events/session/new',
    component: CreateSessionComponent
  },
  
  { path: '404', component: Error404Component },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
