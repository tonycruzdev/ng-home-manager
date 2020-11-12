import { Landlord } from './../../Models/landlord';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {HouseModel} from '../houseModel';
import { HousesService } from '../houses.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-house',
  templateUrl: './edit-house.component.html',
  styleUrls: ['./edit-house.component.css']
})
export class EditHouseComponent implements OnInit, OnDestroy{
  house = new HouseModel() ;
  landlords: Landlord[] = [];
  isOpenFrom = false;
  isOpenTo = false;
  contractStart: Date;
  editSub: Subscription;

  constructor(private router: Router, private route: ActivatedRoute, private housesService: HousesService) { }

  ngOnInit(): void {
    const id = + this.route.snapshot.paramMap.get('id');
    this.editSub = this.housesService.getListHousesById(id).subscribe(homeResponse => {
      this.house = homeResponse;
      this.contractStart = new Date(this.house.dateFrom);
      this.house.dateFrom = new Date(this.house.dateFrom);
      this.house.dateTo = new Date(this.house.dateTo);
     });
    this.housesService.getListLandlord().subscribe(landlords => {
       this.landlords = landlords;
     });

  }
  save(customerForm: NgForm) {
    // console.log(customerForm.form);
    console.log(this.house);
    this.housesService.updateHouse(this.house).subscribe(updateHouse => {
      this.router.navigate(['/', 'houses']);
      console.log(updateHouse);
    });
    // console.log('Saved: ' + JSON.stringify(customerForm.value));
  }
  onValueChange(value: Date): void {
    if (value !== null && this.contractStart !== undefined){
      if (value.getTime() !== this.contractStart.getTime()){
        const dateToadd = new Date(value.getFullYear() + 1, value.getMonth(), value.getDate());
        this.house.dateTo =  dateToadd;
      }

    }
  }
  ngOnDestroy(): void {
    if (this.editSub) {
      this.editSub.unsubscribe();
    }
  }
}
