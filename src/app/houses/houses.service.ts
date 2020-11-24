import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {delay, map} from 'rxjs/operators';
import { House } from '../Models/Houses';
import { HouseModel } from './houseModel';
import { Landlord } from '../Models/landlord';
import { PrintHouse } from './PrintHouse';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HousesService {
  baseUrl = environment.url;
  houseList: House[] = [];
  constructor(private http: HttpClient) {}

  getListHouses() {
    return this.http.get<House[]>( this.baseUrl + 'api/Houses/GetHouses')
    .pipe(
      map(response => {
        this.houseList = response;
        return this.houseList;
      })
    );
  }
  getListHousesById(id: number) {
    return this.http.get<HouseModel>(this.baseUrl + `api/Houses/GetHouseById/${id}`);
  }
  getHouseToPrint(id: number) {
    return this.http.get<PrintHouse>(this.baseUrl + `api/Houses/GetHouseWithLandlord/${id}`);
  }
  deleteHouse(id: number) {
    return this.http.delete(this.baseUrl + `api/Houses/DeleteHouse/${id}`);
  }
  updateHouse(house: HouseModel) {
    return this.http.put<HouseModel>(this.baseUrl + `api/Houses/UpdateHouse/${house.id}`, house);
  }

  addHouse(house: HouseModel) {
    return this.http.post<HouseModel>(this.baseUrl + `api/Houses/AddHouse/`, house);
  }
  getListLandlord() {
    return this.http.get<Landlord[]>(this.baseUrl + 'api/Landlords/GetLandlords');
  }
  getLandlordById(id: number) {
    return this.http.get<Landlord>(this.baseUrl + `api/Landlords/GetLandlord/${id}`);
  }
}
