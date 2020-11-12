import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HouseModel } from '../houseModel';
import { Landlord } from 'src/app/Models/landlord';
import { HousesService } from '../houses.service';

@Component({
  selector: 'app-delete-house',
  templateUrl: './delete-house.component.html',
  styleUrls: ['./delete-house.component.css']
})
export class DeleteHouseComponent implements OnInit {
  house = new HouseModel() ;

  isOpenFrom = false;
  isOpenTo = false;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private housesService: HousesService) { }



  ngOnInit(): void {
    const id = + this.route.snapshot.paramMap.get('id');
    this.housesService.getListHousesById(id).subscribe(homeResponse => {
      this.house = homeResponse;
      this.house.dateFrom = new Date(this.house.dateFrom);
      this.house.dateTo = new Date(this.house.dateTo);
     });
  }
  deleteHome() {
    this.housesService.deleteHouse(this.house.id).subscribe(result => {
      console.log(result);
      this.router.navigate(['/', 'houses']);
    });
    console.log('delete item');
   }

}
