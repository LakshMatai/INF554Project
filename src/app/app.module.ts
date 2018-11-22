import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { USMapFlightsComponent } from './us-map-flights/us-map-flights.component';
import { CarrierStatsComponent } from './carrier-stats/carrier-stats.component';

@NgModule({
  declarations: [
    AppComponent,
    USMapFlightsComponent,
    CarrierStatsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
