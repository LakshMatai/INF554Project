import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { USMapFlightsComponent } from './us-map-flights/us-map-flights.component';

@NgModule({
  declarations: [
    AppComponent,
    USMapFlightsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
