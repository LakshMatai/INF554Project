import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { USMapFlightsComponent } from './us-map-flights/us-map-flights.component';
import { CarrierStatsComponent } from './carrier-stats/carrier-stats.component';
import {RouterModule, Routes} from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
<<<<<<< HEAD
import { BipartiteComponent } from './bipartite/bipartite.component';
=======
import { PublicationsComponent } from './publications/publications.component';
>>>>>>> eba0c41bc401050371351a0c01608efbdca8d294

const appRoutes:Routes=[
  {path:'us-map-flights',component:USMapFlightsComponent},
  {path:'carrier-stats',component:CarrierStatsComponent},
  {path:'home-page',component:HomePageComponent},
<<<<<<< HEAD
  {path:'bipartite',component:BipartiteComponent},
  {path:'',redirectTo:'home-page',pathMatch:'full'}
=======
  {path:'',redirectTo:'home-page',pathMatch:'full'},
  {path:'publications',component:PublicationsComponent}
>>>>>>> eba0c41bc401050371351a0c01608efbdca8d294

]

@NgModule({
  declarations: [
    AppComponent,
    USMapFlightsComponent,
    CarrierStatsComponent,
    HomePageComponent,
<<<<<<< HEAD
    BipartiteComponent
=======
    PublicationsComponent
>>>>>>> eba0c41bc401050371351a0c01608efbdca8d294
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
