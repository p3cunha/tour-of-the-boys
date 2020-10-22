import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchRegisterService {

  registers : string[] = []
  
  constructor() { }

  addRegister(register){          // receive pushed hero from the-heroes-service 
    this.registers.push(register) // store register received to array registers
  }                               // display on hero searched footer

  deleteRegister(){
    this.registers = []
  }
  
}
