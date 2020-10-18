import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { SearchRegisterService } from './search-register.service';
import { HEROES } from './the-heroes'

@Injectable({
  providedIn: 'root'
})

export class TheHeroesService {

  constructor(private SearchRegister: SearchRegisterService) { }

  deliveryHeroes(): Observable<Hero[]>{ // delivery heroes list onInit
    this.SearchRegister.addRegister(``);
    return of(HEROES)
  }

  catchHeroById(id: number): Observable<Hero> { // catch id from hero-details
    this.SearchRegister.addRegister(`Hero searched ID: ${id}`) // push hero id to registers
    return of(HEROES.find(hero => hero.id === id)) // return hero that have id requested
  }

}
