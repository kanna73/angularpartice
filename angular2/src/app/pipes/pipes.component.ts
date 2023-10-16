import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
dateobj = new Date('2023 05 22')
course={
id:'c1',
cname:{
  topic:'ang',
  subtopic:'pipes'
}
};
}
