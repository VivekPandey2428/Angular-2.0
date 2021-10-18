import {Component} from '@angular/core';

@Component({
    selector:'[app-server]',
    templateUrl:'./server.component.html',
    styleUrls:['./server.component.css']
})

export class ServerComponent{
    serverId:number=10;
    serverStatus:string="false";

    getserverStatus(){
        return this.serverStatus;
    }


}