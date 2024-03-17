import { Component } from "@angular/core";

@Component({
  selector:"template-ref",
  templateUrl: "./template-ref.component.html",
  standalone: false
})

export class TemplateRefComponent {
  userName: String;
  handleClick(val: String) {
    console.log("Value", val);
  }
  constructor() {
    this.userName = ""
  }
}