import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { SearchRegisterService } from '../search-register.service';
import { TheHeroesService } from '../the-heroes.service';


@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  heroes: Hero[];
  choosenHero: Hero

  constructor( private TheHeroesService: TheHeroesService,
                private SearchRegister: SearchRegisterService) { }

  ngOnInit(): void {
    this.getHeroes()
  }

  getHeroes(){
    this.TheHeroesService.deliveryHeroes()
    .subscribe(heroes => this.heroes = heroes)
  }

  showDetailsHero(hero: Hero){
    this.choosenHero = hero
    this.SearchRegister.addRegister(`${hero.name}`)
  }
}
