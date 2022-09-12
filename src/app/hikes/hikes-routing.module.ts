import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHikesAddComponent } from './pages/page-hikes-add/page-hikes-add.component';
import { PageHikesEditComponent } from './pages/page-hikes-edit/page-hikes-edit.component';
import { PageHikesListComponent } from './pages/page-hikes-list/page-hikes-list.component';

const routes: Routes = [
  { path: 'list', component: PageHikesListComponent },
  { path: 'edit/:id', component: PageHikesEditComponent },
  { path: 'add', component: PageHikesAddComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HikesRoutingModule { }
