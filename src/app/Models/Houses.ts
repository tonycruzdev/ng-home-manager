export interface House {
    id: number;
    address1?: string;
    address2?: string;
    address3: string;
    address4: string;
    address5: string;
    tenant1: string;
    tenant2: string;
    dateFrom: Date;
    dateTo: Date;
    landlordId: number;
    landlordName: string;
    rent: number;
    deposit: number;
    mobile: string;
    email: string;
  }
