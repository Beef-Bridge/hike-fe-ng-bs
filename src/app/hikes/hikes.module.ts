import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HikesRoutingModule } from './hikes-routing.module';
import { PageHikesAddComponent } from './pages/page-hikes-add/page-hikes-add.component';
import { PageHikesEditComponent } from './pages/page-hikes-edit/page-hikes-edit.component';
import { PageHikesListComponent } from './pages/page-hikes-list/page-hikes-list.component';


@NgModule({
  declarations: [
    PageHikesAddComponent,
    PageHikesEditComponent,
    PageHikesListComponent
  ],
  imports: [
    CommonModule,
    HikesRoutingModule
  ]
})
export class HikesModule { }
