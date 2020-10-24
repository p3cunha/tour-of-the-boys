import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


import { Hero } from '../interface/hero';
import { SearchRegisterService } from './search-register.service';
import { HEROES } from '../../heroes-lits'

@Injectable({
  providedIn: 'root'
})

export class TheHeroesService {

  private heroesUrl = 'api/heroes';  // URL (:baseURL/:id) to fake web api

  constructor(private SearchRegister: SearchRegisterService, 
              private http: HttpClient ) { }

    // deliveryHeroes():Observable<Hero[]>{
    //   return of(HEROES)
    // }
  deliveryHeroes(): Observable<Hero[]>{ // delivery heroes list onInit
    return this.http.get<Hero[]>(this.heroesUrl)  
    .pipe( // intercept observable that failed, passing error to handleError
      tap(_ => this.log('deliveryHeroes()')),
      catchError(this.handleError<Hero[]>('deliveryHeroes', []))
    )
  }

  deliveryHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`deliveryHero id=${id}`))
    );
  }

  catchHeroById(id: number): Observable<Hero> { // catch id from hero-details
    this.SearchRegister.addRegister(`Hero searched ID: ${id}`) // push hero id to registers
    return of(HEROES.find(hero => hero.id === id)) // return hero that have id requested to show on details
  }

  private log(message: string){ // show  message on searchRegister footer
    this.SearchRegister.addRegister(`theHeroesService: ${message}`) 
  }

  // handle Http observable that failed, let the app continue
  // operation: name of operation that failed
  // result (optional): returns as observable result 
  private handleError<T>(operation = 'operation', result? : T){
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`); // show error on searchRegister footer
      return of(result as T); //keep app working by return empty/safe result to app
    }
  }

  updateHero(hero: Hero): Observable<any>{
    return this.http.put(this.heroesUrl, hero, this.httpOptions)
     .pipe ( tap( _ => this.log( `updated hero id =${hero.id}` ) ),
     catchError(this.handleError<any>('updateHero') )
     )
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json' })
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.http.post(this.heroesUrl, hero, this.httpOptions)
    .pipe( tap( _ => this.log( `Hero added id: ${hero.id}` ) ),
    catchError(this.handleError<any>('addHero')) )
  }
}


