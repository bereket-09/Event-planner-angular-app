import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/services/event.service';


@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent {
  event:any;
  constructor(private eventService:EventService,private route:ActivatedRoute){}
  
  ngOnInit(){
    this.event=this.eventService.getEvent(+this.route.snapshot.params['id'])
  }
}
