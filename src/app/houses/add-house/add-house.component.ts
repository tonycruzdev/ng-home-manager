import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Landlord } from '../../Models/landlord';
import { HouseModel } from '../houseModel';
import { HousesService } from '../houses.service';

@Component({
  selector: 'app-add-house',
  templateUrl: './add-house.component.html',
  styleUrls: ['./add-house.component.css']
})
export class AddHouseComponent implements OnInit {

  house = new HouseModel();
  landlords: Landlord[] = [];
  isOpenFrom = false;
  isOpenTo = false;
  constructor(private router: Router, private route: ActivatedRoute, private housesService: HousesService) {

  }


  ngOnInit(): void {

     const todate = new Date();
     this.house.dateFrom = todate;

     const dateToadd = new Date(todate.getFullYear() + 1, todate.getMonth(), todate.getDate());
     this.house.dateTo =  dateToadd;

     this.housesService.getListLandlord().subscribe(landlords => {
       this.landlords = landlords;
     });
  }
  save(customerForm: NgForm) {
    // console.log(customerForm.form);
    console.log(this.house);
    this.housesService.addHouse(this.house).subscribe(updateHouse => {
      this.router.navigate(['/', 'houses']);
      console.log(updateHouse);
    });
    // console.log('Saved: ' + JSON.stringify(customerForm.value));
  }
  onValueChange(value: Date): void {
    if (value !== null)
    {
      const dateToadd = new Date(value.getFullYear() + 1, value.getMonth(), value.getDate());
      // this.house.dateTo =  dateToadd;
    }

  }

}
