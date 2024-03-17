import { Component } from '@angular/core';
import { PropertyBindingComponent } from './components/property-binding/property-binding.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: false
})

export class AppComponent {
  title: String;
  constructor() {
    this.title = 'Ultimate Angular'
  }
}