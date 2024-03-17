import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PropertyBindingComponent } from './components/property-binding/property-binding.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { TemplateRefComponent } from './components/template-ref/template-ref.component';

@NgModule({
  declarations: [AppComponent, 
    PropertyBindingComponent, 
    EventBindingComponent, 
    TwoWayBindingComponent,
    TemplateRefComponent
  ],
  imports: [BrowserModule, CommonModule, FormsModule],
  bootstrap:[AppComponent]
})
export class AppModule {

}