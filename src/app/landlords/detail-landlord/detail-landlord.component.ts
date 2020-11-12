import { LandlordWithHomes } from './../../Models/Landlord-with-homes';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ILandlordWithHomes } from 'src/app/Models/Landlord-with-homes';

import { LandlordsManagerService } from '../landlords-manager.service';

@Component({
  selector: 'app-detail-landlord',
  templateUrl: './detail-landlord.component.html',
  styleUrls: ['./detail-landlord.component.css']
})
export class DetailLandlordComponent implements OnInit {
  landWithHouse = new LandlordWithHomes();
  constructor(private router: Router, private route: ActivatedRoute, private landlordService: LandlordsManagerService ) { }

  ngOnInit(): void {
    const id = + this.route.snapshot.paramMap.get('id');
    this.landlordService.getLandlordWithHousesById(id).subscribe(landlordResponse => {
      this.landWithHouse = landlordResponse;
     });
  }
  BackList(){}

}
