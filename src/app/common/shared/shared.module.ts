import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgxNavDrawerModule } from '@ngx-lite/nav-drawer';

import { HeaderComponent } from './layout/header/header/header.component';

const modules = [
  CommonModule,
  NgxNavDrawerModule,
  RouterModule
]

const components = [
  HeaderComponent
]

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    ...modules
  ],
  exports: [
    ...components,
    ...modules
  ]
})
export class SharedModule { }
