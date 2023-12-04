export interface Product {
  id: string;
  name: string;
  description: string;
  type: EventTypes[];
  minGuestLimit: number;
  maxGuestLimit: number;
  vendorID: string;
  isDeleted: boolean;

  //navigation
  eventProducts?: EventProduct[];
  packageProducts?: PackageProducts[];
}

export enum EventTypes {
  Catering,
  Party
}

export interface EventProduct {

}

export interface PackageProducts {

}
