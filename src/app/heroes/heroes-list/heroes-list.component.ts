import { Component, OnInit } from '@angular/core';

import { Hero } from './../../common/interface/hero';
import { SearchRegisterService } from './../../common/service/search-register.service';
import { TheHeroesService } from './../../common/service/the-heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {

  heroes: Hero[]
  // choosenHero: Hero
  
  constructor( private TheHeroesService: TheHeroesService,
              private SearchRegister: SearchRegisterService) { }

  ngOnInit(): void {
    this.getHeroes()
  }

  getHeroes(): void{
    this.TheHeroesService.deliveryHeroes()
    .subscribe(heroes => this.heroes = heroes)
  }

  // showDetailsHero(hero: Hero){
  //   this.choosenHero = hero
  //   this.SearchRegister.addRegister(`${hero.name}`)
  // }

 add(name: string): void{   //catch hero added in template
  name = name.trim(); 
  if (!name) { return; } 
  this.TheHeroesService.addHero( { name } as Hero)
    .subscribe(hero => this.heroes.push(hero))
 }

 delete(hero: Hero){
  this.heroes = this.heroes.filter( h => h !== hero)
  this.TheHeroesService.deleteHero(hero).subscribe()
 }
}
