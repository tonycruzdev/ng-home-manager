import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import * as _ from 'lodash';
import { HousesService } from '../houses.service';
import { House } from 'src/app/Models/Houses';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-houses-home',
  templateUrl: './houses-home.component.html',
  styleUrls: ['./houses-home.component.css']
})
export class HousesHomeComponent implements OnInit, OnDestroy {
  houses: House[];
  dataSource: House[];
  displaySource: House[];
  houseSub: Subscription;
  pageStart = 0;
  currentPage = 0;
  itemPerPage = 10;
  pageCount = 0;
  searchtxt = '';
  isLoading = false;

  constructor(
    private housesService: HousesService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService) { }


  ngOnInit(): void {
    const start = 0;
    const size = 10;
    this.spinner.show();
    this.isLoading = true;
    this.houseSub = this.housesService.getListHouses().subscribe(res => {
       this.dataSource = res;
       this.displaySource =  res.slice(start, start + size);
       this.pageCount = Math.ceil(res.length / 10) || 1;
       this.spinner.hide();
       this.isLoading = false;
       this.toastr.success('List home loaded');
    });
  }
  paginate = (page: number) =>  {
    const size = this.itemPerPage;
    const start = page * size;
    const nextPage = this.dataSource.slice(start, start + size);
    this.displaySource = nextPage;
    this.currentPage = page;
  }
  searchHomes = () => {
    if (this.searchtxt !== '') {
        const addressTenatsResult = this.dataSource.filter(
          srch => (srch.address1.toLowerCase().includes(this.searchtxt.toLowerCase())) ||
             (srch.tenant1.toLowerCase().includes(this.searchtxt.toLowerCase())));
        if (addressTenatsResult.length > 0) {
            const size = this.itemPerPage;
            const start = 0 * size;
            const dataToPage =  addressTenatsResult.slice(start, start + size);
            this.pageCount = Math.ceil(addressTenatsResult.length / 10) || 1;
            this.displaySource = dataToPage;
        }

    } else {
       this.pageCount = Math.ceil(this.dataSource.length / 10) || 1;
       this.paginate(0);
    }
  }
  ngOnDestroy(): void {
    if (this.houseSub) {
      this.houseSub.unsubscribe();
    }
  }

}
