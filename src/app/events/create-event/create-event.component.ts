import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EventService } from 'src/app';
import { EventModel } from 'src/app/model/event.model';


@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent {
  isDirty:boolean=true;
  newEvent: any

  constructor(private route:Router,private eventService:EventService){}

  ngOnInit() {
    
  }
  cancel(){
    this.route.navigate(['events'])
  }
  saveEvent(formValues: any){
    this.eventService.saveEvent(formValues)
    this.isDirty=false;
    this.route.navigate(['events'])
}
}
