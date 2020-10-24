import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { slideInAnimation } from './animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ slideInAnimation ]
})

export class AppComponent {
  title = 'Tour of The Boys';

  prepareRoute(outlet: RouterOutlet) { // take value of outlet and return string based on current rout 
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
