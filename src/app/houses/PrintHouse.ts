export interface PrintHouse {
    id: number;
    address1: string;
    address2: string;
    address3: string;
    address4: string;
    address5: string;
    tenant1: string;
    tenant2: string;
    dateFrom: Date;
    dateTo: Date;
    landlordId: number;
    rent: number;
    deposit: number;
    mobile: string;
    email: string;
    landlord: Landlord;
  }
export interface Landlord {
    id: number;
    name: string;
    address1: string;
    address2: string;
    address3: string;
    address4: string;
    address5: string;
    mobile: string;
    email: string;
}
