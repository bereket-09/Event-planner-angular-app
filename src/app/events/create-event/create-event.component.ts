import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent {
  isDirty:boolean=true;
  constructor(private route:Router){}

  cancel(){
    this.route.navigate(['events'])
  }
}
