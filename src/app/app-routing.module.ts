import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: 'houses',
    loadChildren: () =>
      import('./houses/houses.module').then(m => m.HousesModule)
  },
  {
    path: 'landlords',
    loadChildren: () =>
      import('./landlords/landlords.module').then(m => m.LandlordsModule)
  },
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
