import { Component } from "@angular/core";

@Component({
  selector:'two-way-binding',
  templateUrl: './two-way-binding.component.html',
  standalone: false
})

export class TwoWayBindingComponent {
 name: String;
 city: String;

 handleChange(value: any) {
  this.name = value
 }
 constructor() {
  this.name = "";
  this.city = ""
 } 
}