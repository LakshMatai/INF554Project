import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { USMapFlightsComponent } from './us-map-flights/us-map-flights.component';
import { CarrierStatsComponent } from './carrier-stats/carrier-stats.component';
import {RouterModule, Routes} from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

const appRoutes:Routes=[
  {path:'us-map-flights',component:USMapFlightsComponent},
  {path:'carrier-stats',component:CarrierStatsComponent},
  {path:'home-page',component:HomePageComponent},
  {path:'',redirectTo:'home-page',pathMatch:'full'}

]

@NgModule({
  declarations: [
    AppComponent,
    USMapFlightsComponent,
    CarrierStatsComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing:true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
