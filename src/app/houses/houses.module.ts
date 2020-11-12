
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { HttpClientModule } from '@angular/common/http';
import { HousesRoutingModule } from './houses-routing.module';
import { HousesHomeComponent } from './houses-home/houses-home.component';
import { DeleteHouseComponent } from './delete-house/delete-house.component';
import { DetailsHouseComponent } from './details-house/details-house.component';
import { AddHouseComponent } from './add-house/add-house.component';
import { EditHouseComponent } from './edit-house/edit-house.component';
import { NgxSpinnerModule } from 'ngx-spinner';




@NgModule({
  declarations: [HousesHomeComponent, DeleteHouseComponent, DetailsHouseComponent, AddHouseComponent, EditHouseComponent],
  imports: [
    CommonModule,
    HousesRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    NgxSpinnerModule,
    BsDatepickerModule.forRoot(),
  ],
  exports: [HousesHomeComponent]
})
export class HousesModule { }
