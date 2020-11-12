import { Component, OnInit } from '@angular/core';
import { HousesManagerService } from '../houses-manager.service';
import { House } from '../Models/Houses';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   ngOnInit(): void {}

}
