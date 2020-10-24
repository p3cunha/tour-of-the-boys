import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from './../../common/interface/hero';
import { TheHeroesService } from './../../common/service/the-heroes.service';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {

  heroes: Hero[]

  @Input() hero: Hero
  constructor(
    private route: ActivatedRoute,
    private TheHeroesService: TheHeroesService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHeroes()
  }

  getHeroes(): void {    // click on herolist redirect to details page
    const id = +this.route.snapshot.paramMap.get('id') //catch id on URL
    this.TheHeroesService.catchHeroById(id) // push to id to registers and return the hero matching with id
    .subscribe(hero => this.hero = hero) // hero returned becomes this.hero, displayed on card
  }              
  
  goBack(){
    this.location.back()
  }

  save(){
    this.TheHeroesService.updateHero(this.hero)
    .subscribe(() => this.goBack());
  }
}
