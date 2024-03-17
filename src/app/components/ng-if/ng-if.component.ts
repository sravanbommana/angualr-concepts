import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "ng-if",
  templateUrl: "./ng-if.component.html",
  standalone: true,
  imports:[CommonModule]
})

export class NgIfComponent {
  productName: String;

  handleChange(event: any) {
    this.productName = event.target.value;
  }
  constructor() {
    this.productName = ""
  }
}