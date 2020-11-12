import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandlordsRoutingModule } from './landlords-routing.module';
import { LandlordHomeComponent } from './landlord-home/landlord-home.component';
import { DetailLandlordComponent } from './detail-landlord/detail-landlord.component';
import { EditLandlordComponent } from './edit-landlord/edit-landlord.component';
import { DeleteLandlordComponent } from './delete-landlord/delete-landlord.component';
import { AddLandlordComponent } from './add-landlord/add-landlord.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [LandlordHomeComponent, DetailLandlordComponent, EditLandlordComponent, DeleteLandlordComponent, AddLandlordComponent],
  imports: [
    CommonModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    NgxSpinnerModule,
    LandlordsRoutingModule
  ]
})
export class LandlordsModule { }

