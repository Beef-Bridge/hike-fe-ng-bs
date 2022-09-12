import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'hikes',
    loadChildren: () => import('./hikes/hikes.module')
    .then( (file) => file.HikesModule )
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
