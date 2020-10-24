import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';


import { Hero } from '../interface/hero'

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb(){
    const heroes = [
      { id: 1, name: 'Homelander', power: 'Supermans power' },
      { id: 2, name: 'StormFront', power: 'Lightning' },
      { id: 3, name: 'Deep', power: 'Speak with fish'  },
      { id: 4, name: 'A-Train', power: 'Super speed' },
      { id: 5, name: 'Queen Meave', power: 'Super strentch' },
      { id: 6, name: 'Starlight', power: 'Shine' },
      { id: 7, name: 'Black Noir', power: 'Ninja' }
    ];
    return {heroes}
  }

  // if heroes [] is not empty, return max Id of array + 1; else return the first hero id
  genId(heroes: Hero[]): number { 
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 1;
  }
}
