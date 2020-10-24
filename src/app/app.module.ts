import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientInMemoryWebApiModule, InMemoryDbService } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesListComponent } from './heroes/heroes-list/heroes-list.component';
import { HeroDetailsComponent } from './heroes/hero-details/hero-details.component';
import { SearchRegisterComponent } from './search-register/search-register.component';
import { DashBoardComponent } from './heroes/dash-board/dash-board.component';
import { InMemoryDataService } from './common/service/in-memory-data.service';
import { SharedModule } from './common/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeroesListComponent,
    HeroDetailsComponent,
    SearchRegisterComponent,
    DashBoardComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientInMemoryWebApiModule.forRoot( //Intercepts HTTP request 
    InMemoryDataService, { dataEncapsulation: false }  //and return a simulated server
    )
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
