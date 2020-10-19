import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Hero } from './hero';
import { SearchRegisterService } from './search-register.service';
import { HEROES } from './heroes-lits'

@Injectable({
  providedIn: 'root'
})

export class TheHeroesService {

  private heroesUrl = 'api/heroes';  // URL to web api

  constructor(private SearchRegister: SearchRegisterService,
              private http: HttpClient) { }

  // deliveryHeroes(): Observable<Hero[]>{ // delivery heroes list onInit
  //   return of(HEROES)
  // }
    deliveryHeroes(): Observable<Hero[]>{
      return this.http.get<Hero[]>(this.heroesUrl)
    }

  catchHeroById(id: number): Observable<Hero> { // catch id from hero-details
    this.SearchRegister.addRegister(`Hero searched ID: ${id}`) // push hero id to registers
    return of(HEROES.find(hero => hero.id === id)) // return hero that have id requested to show on details
  }

  private log(id: string){
    this.SearchRegister.addRegister(`Hero searched ID: ${id}`) 
  }

}
