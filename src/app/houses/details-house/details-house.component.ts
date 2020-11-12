import { Component, OnInit } from '@angular/core';
import { HouseModel } from '../houseModel';
import { Landlord } from 'src/app/Models/landlord';
import { Router, ActivatedRoute } from '@angular/router';
import { HousesService } from '../houses.service';
import { PrintHouse } from '../PrintHouse';

@Component({
  selector: 'app-details-house',
  templateUrl: './details-house.component.html',
  styleUrls: ['./details-house.component.css']
})
export class DetailsHouseComponent implements OnInit {
  house: PrintHouse ;
  landlord: Landlord ;
  isOpenFrom = false;
  isOpenTo = false;
  constructor(private route: ActivatedRoute, private housesService: HousesService) { }

  ngOnInit(): void {
    const id = + this.route.snapshot.paramMap.get('id');
    this.housesService.getHouseToPrint(id).subscribe(homeResponse => {
      this.house = homeResponse;
      console.log(homeResponse);
      this.house.dateFrom = new Date(this.house.dateFrom);
      this.house.dateTo = new Date(this.house.dateTo);
      this.getLandlordDetails(this.house.landlordId);
     });

  }
  getLandlordDetails(landlordId: number) {
    this.housesService.getLandlordById(landlordId).subscribe(landlord => {
      this.landlord = landlord;
    });
  }
  printContract(id: string) {
    const data = document.getElementById(id).innerHTML;
    const myWindow = window.open('', 'my div', 'height=400,width=600');
    myWindow.document.write('<html><head><title>Print Contract</title>');
   // tslint:disable-next-line:max-line-length
    myWindow.document.write('<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">');
   // myWindow.document.write('<link rel="stylesheet" href="/css/stylePrint.css" type="text/css" />');
    myWindow.document.write('</head><body >');
    myWindow.document.write(data);
    myWindow.document.write('</body></html>');
    myWindow.document.close();

    // tslint:disable-next-line:only-arrow-functions
    myWindow.onload = function() {
        myWindow.focus();
        myWindow.print();
    };

  }
}
