import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { USMapFlightsComponent } from './us-map-flights/us-map-flights.component';
import { CarrierStatsComponent } from './carrier-stats/carrier-stats.component';
import {RouterModule, Routes} from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { BipartiteComponent } from './bipartite/bipartite.component';
import { PublicationsComponent } from './publications/publications.component';

const appRoutes:Routes=[
  {path:'us-map-flights',component:USMapFlightsComponent},
  {path:'carrier-stats',component:CarrierStatsComponent},
  {path:'home-page',component:HomePageComponent},
  {path:'bipartite',component:BipartiteComponent},
  {path:'',redirectTo:'home-page',pathMatch:'full'},
  {path:'publications',component:PublicationsComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    USMapFlightsComponent,
    CarrierStatsComponent,
    HomePageComponent,
    BipartiteComponent,
    PublicationsComponent
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
