import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { House } from './Models/Houses';
@Injectable({
  providedIn: 'root'
})
export class HousesManagerService {

  constructor(private http: HttpClient) {}
  getListHouses() {
    return this.http.get<House[]>('https://lettings-manager.azurewebsites.net/api/Houses/GetHouses');
  }
}
