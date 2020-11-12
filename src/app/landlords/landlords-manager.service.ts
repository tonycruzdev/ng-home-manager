import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { ILandlord } from '../Models/landlord';
import { HttpClient } from '@angular/common/http';
import { delay, map } from 'rxjs/operators';
import { LandlordModel } from './landlord-model';
import { of } from 'rxjs';
import { ILandlordWithHomes } from '../Models/Landlord-with-homes';

@Injectable({
  providedIn: 'root'
})
export class LandlordsManagerService {
  baseUrl = environment.url;
  private landlords: ILandlord[] = [];
  dataSource: ILandlord[];
  displaySource: ILandlord[];
  pageStart = 0;
  currentPage = 0;
  itemPerPage = 8;
  pageCount = 0;

  constructor(private http: HttpClient) { }

  paginate = (page: number) =>  {
    const size = this.itemPerPage;
    const start = page * size;
    const nextPage = this.dataSource.slice(start, start + size);
    this.displaySource = nextPage;
    this.currentPage = page;
  }
  searchHomes = (search: string) => {
    if (search !== '') {
        const addressTenatsResult = this.dataSource.filter(
          srch => (srch.address1.toLowerCase().includes(search.toLowerCase())) ||
            (srch.name.toLowerCase().includes(search.toLowerCase())));
        if (addressTenatsResult.length > 0) {
            const size = this.itemPerPage;
            const start = 0 * size;
            const dataToPage =  addressTenatsResult.slice(start, start + size);
            this.pageCount = Math.ceil(addressTenatsResult.length / 8) || 1;
            this.displaySource = dataToPage;
        }

    } else {
      this.pageCount = Math.ceil(this.dataSource.length / 8) || 1;
      this.paginate(0);
    }
  }
  getListLandlords() {
    return this.http.get<ILandlord[]>( this.baseUrl + 'api/Landlords/GetLandlords')
    .pipe(
      delay(2000),
      map(response => {
        this.landlords = response;
        this.dataSource = response;
        this.pageCount = Math.ceil(response.length / 8) || 1;
        this.paginate(0);
        return this.landlords;
      })
    );
  }
  getLandlordById(id: number) {
    const landlord = this.dataSource.find(l => l.id === id);
    if (landlord) {
      return of(landlord);
    }
    return this.http.get<ILandlord>(this.baseUrl + `api/Landlords/GetLandlord/${id}`);
  }
  getLandlordWithHousesById(id: number) {
   return this.http.get<ILandlordWithHomes>(this.baseUrl + `api/Landlords/GetLandlordWithHouse/${id}`);
  }
  deleteLandlord(id: number) {
    return this.http.delete(this.baseUrl + `api/Landlords/DeleteLandlord/${id}`);
  }
  updateLandlord(landlord: ILandlord) {
    return this.http.put<ILandlord>(this.baseUrl + `api/Landlords/UpdateLandlord/${landlord.id}`, landlord);
  }

  addLandlord(landlord: LandlordModel) {
    return this.http.post<LandlordModel>(this.baseUrl + `api/Landlords/AddLandlord/`, landlord);
  }

}
