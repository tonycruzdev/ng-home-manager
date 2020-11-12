import { House } from './Houses';

export interface ILandlordWithHomes {
    id: number;
    name: string;
    address1: string;
    mobile: string;
    email: string;
    houses: House[];
}
export class LandlordWithHomes {
    id: number;
    name: string;
    address1: string;
    mobile: string;
    email: string;
    houses: House[];
}

