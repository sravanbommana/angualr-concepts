import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

interface User {
  id: number,
  name: string,
  active: boolean
}

@Component({
  selector: 'ng-for',
  templateUrl: "./ng-for.component.html",
  standalone: true,
  imports:[CommonModule]
})

export class NgForComponent {
  users: User[] = [
    {
      id: 1,
      name: "Leanne Graham",
      active:true
    },
    {
      id: 2,
      name: "Ervin Howell",
      active: false,
    },
    {
      id: 3,
      name: "Clementine Bauch",
      active:true
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      active:false
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      active:true  
    }
  ]
}