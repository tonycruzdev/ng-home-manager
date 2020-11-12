import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ILandlord } from 'src/app/Models/landlord';
import { LandlordsManagerService } from '../landlords-manager.service';


@Component({
  selector: 'app-edit-landlord',
  templateUrl: './edit-landlord.component.html',
  styleUrls: ['./edit-landlord.component.css']
})
export class EditLandlordComponent implements OnInit {
 landlord: ILandlord;
  constructor(private router: Router, private route: ActivatedRoute, private landlordService: LandlordsManagerService ) { }

  ngOnInit(): void {
    const id = + this.route.snapshot.paramMap.get('id');
    this.landlordService.getLandlordById(id).subscribe(landlordResponse => {
      this.landlord = landlordResponse;
     });
  }
  save(f: NgForm) {
    console.log(f.form);
    console.log(this.landlord);
    this.landlordService.updateLandlord(this.landlord).subscribe(updateHouse => {
      this.router.navigate(['/', 'landlords']);
      console.log(updateHouse);
    });
  }

}
