import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router} from '@angular/router';
import { LandlordModel } from '../landlord-model';
import { LandlordsManagerService } from '../landlords-manager.service';

@Component({
  selector: 'app-add-landlord',
  templateUrl: './add-landlord.component.html',
  styleUrls: ['./add-landlord.component.css']
})
export class AddLandlordComponent implements OnInit {
  landlord = new LandlordModel();
  constructor(private router: Router,  private landlordService: LandlordsManagerService ) { }

  ngOnInit(): void {
  }
  save(f: NgForm) {
    console.log(f.form);
    console.log(this.landlord);
    this.landlordService.addLandlord(this.landlord).subscribe(updateHouse => {
      this.router.navigate(['/', 'landlords']);
    });
  }
}
