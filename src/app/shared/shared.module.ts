import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const components = [
    NavbarComponent, 
    FooterComponent,

  ]


@NgModule({
  declarations: [...components],
  imports: [
    CommonModule
  ],
  exports: [
      ...components
    ]
})
export class SharedModule { }
