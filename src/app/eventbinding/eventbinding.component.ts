import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {
  allowNewServer=false;
  serverCreationStatus='No Server is Created.';
  newserver='';
  constructor() { 
    setTimeout(()=>{
      this.allowNewServer=true;
    },2000)
  }

  ngOnInit(){
  }
  onCreateServer(){
    this.serverCreationStatus='Server is created '
  }
  onServerName(event:Event){
    this.newserver=(<HTMLInputElement>event.target).value;
  }
}
