import { LandlordWithHomes } from './../../Models/Landlord-with-homes';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LandlordsManagerService } from '../landlords-manager.service';

@Component({
  selector: 'app-delete-landlord',
  templateUrl: './delete-landlord.component.html',
  styleUrls: ['./delete-landlord.component.css']
})
export class DeleteLandlordComponent implements OnInit {

  landWithHouse = new LandlordWithHomes();
  constructor(private router: Router, private route: ActivatedRoute, private landlordService: LandlordsManagerService ) { }

  ngOnInit(): void {
    const id = + this.route.snapshot.paramMap.get('id');
    this.landlordService.getLandlordWithHousesById(id).subscribe(landlordResponse => {
      this.landWithHouse = landlordResponse;
     });
  }
  deleteLandlord() {
    this.landlordService.deleteLandlord(this.landWithHouse.id).subscribe(result => {
      console.log(result);
      this.router.navigate(['/', 'landlords']);
    });
    console.log('delete item');
   }
}
