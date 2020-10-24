import { Component, OnInit } from '@angular/core';

import { Hero } from './../../common/interface/hero';
import { SearchRegisterService } from './../../common/service/search-register.service';
import { TheHeroesService } from './../../common/service/the-heroes.service';


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
