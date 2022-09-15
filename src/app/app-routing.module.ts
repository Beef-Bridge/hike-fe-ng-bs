import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'hikes',
    loadChildren: () => import('./hikes/hikes.module')
    .then( (file) => file.HikesModule )
  },
  {
    path: 'map',
    loadChildren: () => import('./map/map.module')
    .then( (file) => file.MapModule )
  },
  {
    path: 'to-do-list',
    loadChildren: () => import('./to-do-list/to-do-list.module')
    .then( (file) => file.ToDoListModule )
  },
  {
    path: '**',
    loadChildren: () => import('./page-not-found/page-not-found.module')
    .then( (file) => file.PageNotFoundModule )
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
