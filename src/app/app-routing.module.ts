import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { DashBoardComponent } from './dash-board/dash-board.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HeroesComponent } from './heroes/heroes.component';
import { SearchRegisterComponent } from './search-register/search-register.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent, data: { animation: 'heroes'} },
  { path: 'dashboard',  component: DashBoardComponent, data: { animation: 'dashboard'} },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'details/:id', component: HeroDetailsComponent},
  { path: 'search', component: SearchRegisterComponent, data: { animation: 'search'} },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
