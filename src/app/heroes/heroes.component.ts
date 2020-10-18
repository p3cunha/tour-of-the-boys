import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { SearchRegisterService } from '../search-register.service';
import { TheHeroesService } from '../the-heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[]
  // choosenHero: Hero
  
  constructor( private TheHeroesService: TheHeroesService,
              private SearchRegister: SearchRegisterService ) { }

  ngOnInit() {
    this.getHeroes()
  }

  getHeroes(){
    this.TheHeroesService.deliveryHeroes()
    .subscribe(heroes => this.heroes = heroes)
  }

  // showDetailsHero(hero: Hero){
  //   this.choosenHero = hero
  //   this.SearchRegister.addRegister(`${hero.name}`)
  // }

}
