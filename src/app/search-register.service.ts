import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchRegisterService {

  registers : string[] = []
  
  constructor() { }

  addRegister(register){          // receive pushed hero from the-heroesService 
    this.registers.push(register) // push hero info to array registers
  }                               // displayed on hero searched

  deleteRegister(){
    this.registers = []
  }
  
}
