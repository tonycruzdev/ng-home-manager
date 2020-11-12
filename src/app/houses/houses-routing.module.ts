import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HousesHomeComponent } from './houses-home/houses-home.component';
import { AddHouseComponent } from './add-house/add-house.component';
import { EditHouseComponent } from './edit-house/edit-house.component';
import { DetailsHouseComponent } from './details-house/details-house.component';
import { DeleteHouseComponent } from './delete-house/delete-house.component';


const routes: Routes = [
    { path: '', component: HousesHomeComponent},
    { path: 'addhouse', component: AddHouseComponent},
    { path: 'edithouse/:id', component: EditHouseComponent },
    { path: 'printdetails/:id', component: DetailsHouseComponent },
    { path: 'deletehouse/:id', component: DeleteHouseComponent },
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HousesRoutingModule { }
