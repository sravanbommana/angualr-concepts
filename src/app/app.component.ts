import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { CommonModule } from '@angular/common';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIfComponent, NgForComponent, NgClassComponent, NgStyleComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-ng-app';
}
