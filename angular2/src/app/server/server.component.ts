import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
     serverID:number=1001;
     serverStatus: string ='offline';
     serverNum = [101,102,103];
     constructor(){
      this.serverStatus=Math.random()>0.5 ? 'online' : 'offline';
     }
     getServerId(){
      return this.serverID;
     }
     getServerStatus(){
      return this.serverStatus;
     }
     getColor(){
      return this.serverStatus=='online'? 'green' :'red';
     }
}