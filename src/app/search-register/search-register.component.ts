import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../common/interface/hero';
import { SearchRegisterService } from '../common/service/search-register.service';

@Component({
  selector: 'app-search-register',
  templateUrl: './search-register.component.html',
  styleUrls: ['./search-register.component.css']
})
export class SearchRegisterComponent implements OnInit {

  constructor(public SearchRegister: SearchRegisterService) { }

  ngOnInit(): void {
  }

}
