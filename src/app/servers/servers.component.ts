import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-servers',
  templateUrl:'./servers.component.html' ,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
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
