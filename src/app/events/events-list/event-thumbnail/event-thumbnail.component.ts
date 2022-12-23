import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.scss']
})
export class EventThumbnailComponent {
@Input() event:any


getStartTimeClass(){
  if(this.event && this.event.time ==='8:00 am')
    return 'green bold'
  return ''
}

}
