import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MatSliderModule } from '@angular/material/slider';
import { HttpClientInMemoryWebApiModule, InMemoryDbService } from 'angular-in-memory-web-api';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { SearchRegisterComponent } from './search-register/search-register.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailsComponent,
    SearchRegisterComponent,
    DashBoardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule,
    MatSliderModule,
    HttpClientInMemoryWebApiModule.forRoot( //Intercepts HTTP request 
      InMemoryDataService, { dataEncapsulation: false }  //and return a simulated server
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
