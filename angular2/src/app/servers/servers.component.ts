import { Component } from '@angular/core';

@Component({
  selector:'app-servers',
  //selector: '.app-servers',
  //selector:'[app-servers]',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
     
  serverCreateOption : boolean=false;
     serversStatus : string = "offline";
     
     servername:string="";
     ServerCreated : string ="Not Yet Created";
     serversList =['SQL','ORACLE','MS'];
     constructor(){
      setTimeout(() => {
        this.serverCreateOption = true;
      }, 5000);
     }

     onServerAdd(){
        this.serversStatus="online";
        this.serversList.push(this.servername)
     }

     OnServerName(event : Event){
            return  this.servername=(<HTMLInputElement>event.target).value;

     }
    
}