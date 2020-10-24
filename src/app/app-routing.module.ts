import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { DashBoardComponent } from './heroes/dash-board/dash-board.component';
import { HeroDetailsComponent } from './heroes/hero-details/hero-details.component';
import { HeroesListComponent } from './heroes/heroes-list/heroes-list.component';
import { SearchRegisterComponent } from './search-register/search-register.component';

const routes: Routes = [
  { path: 'heroes-list', component: HeroesListComponent, data: { animation: 'heroes'} },
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
