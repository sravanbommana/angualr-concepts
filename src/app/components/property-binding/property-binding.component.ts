import { Component } from "@angular/core";
@Component({
  selector: "property-bind",
  templateUrl: "./property-binding.component.html",
  standalone: false
})

export class PropertyBindingComponent {
  title: String;
  age: Number = 10;
  constructor() {
    this.title = "Welcome to Property Binding"
  }
}