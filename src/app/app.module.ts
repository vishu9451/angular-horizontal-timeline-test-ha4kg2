import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HorizontalTimelineComponent } from './horizontal-timeline/horizontal-timeline.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule ],
  declarations: [ AppComponent, HorizontalTimelineComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
