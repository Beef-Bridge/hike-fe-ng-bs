import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { UiComponent } from './containers/ui/ui.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavComponent,
    UiComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    UiComponent
  ]
})
export class UiModule { }
