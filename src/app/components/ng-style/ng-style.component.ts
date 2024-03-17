import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

interface User {
  id: number,
  name: string,
  active: boolean
}

@Component({
  selector: 'ng-style',
  templateUrl: "./ng-style.component.html",
  standalone: true,
  styleUrl:"./ng-style.component.css",
  imports:[CommonModule]
})

export class NgStyleComponent {
  users: User[] = [
    {
      id: 1,
      name: "Leanne Graham",
      active: true
    },
    {
      id: 2,
      name: "Ervin Howell",
      active: false
    },
    {
      id: 3,
      name: "Clementine Bauch",
      active: false
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      active: true
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      active: true 
    }
  ]
}