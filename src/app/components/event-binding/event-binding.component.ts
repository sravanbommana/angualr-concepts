import { Component } from "@angular/core";

@Component({
  selector: "event-bind",
  templateUrl: "./event-binding.component.html",
  standalone: false
})

export class EventBindingComponent {
  name: String;
  constructor() {
    this.name = "test"
  }

  handleBlur(event:any) {
    this.name = event?.target.value
  }
}