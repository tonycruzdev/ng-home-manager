import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandlordHomeComponent } from './landlord-home/landlord-home.component';
import { AddLandlordComponent } from './add-landlord/add-landlord.component';
import { EditLandlordComponent } from './edit-landlord/edit-landlord.component';
import { DetailLandlordComponent } from './detail-landlord/detail-landlord.component';
import { DeleteLandlordComponent } from './delete-landlord/delete-landlord.component';



const routes: Routes = [

  { path: '', component: LandlordHomeComponent},
  { path: 'addlandlord', component: AddLandlordComponent},
  { path: 'editlandlord/:id', component: EditLandlordComponent },
  { path: 'detaillandlord/:id', component: DetailLandlordComponent },
  { path: 'deletelandlord/:id', component: DeleteLandlordComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandlordsRoutingModule { }
