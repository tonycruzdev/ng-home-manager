import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { ILandlord } from '../../Models/landlord';
import { LandlordsManagerService } from '../landlords-manager.service';

@Component({
  selector: 'app-landlord-home',
  templateUrl: './landlord-home.component.html',
  styleUrls: ['./landlord-home.component.css']
})
export class LandlordHomeComponent implements OnInit, OnDestroy {
 landlordSub: Subscription;
 searchtxt: string;
 isLoading = false;
  constructor(
    public landlordSrv: LandlordsManagerService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService) { }
  ngOnInit(): void {
    this.isLoading = true;
    this.spinner.show();
    this.landlordSub = this.landlordSrv.getListLandlords().subscribe(() => {
      this.isLoading = false;
      this.spinner.hide();
      this.toastr.info('Landlord List Loaded', 'Landlords');
    });
  }
  searchLandlord() {
    this.landlordSrv.searchHomes(this.searchtxt);
  }
  ngOnDestroy(): void {
    if (this.landlordSub) {
      this.landlordSub.unsubscribe();
    }
  }
}
