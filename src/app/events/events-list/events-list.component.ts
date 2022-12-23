import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import { ToastrService } from 'src/app/services/toastr.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {
 events:any;
 
 constructor(private eventService:EventService,private toastrService:ToastrService,private route:ActivatedRoute){}

 ngOnInit(){
   this.events=this.route.snapshot.data['events']
 }

 handleClick(eventName:any){
  this.toastrService.success(eventName)
 }
}
