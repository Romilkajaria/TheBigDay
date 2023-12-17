export interface Product {
  id: string | undefined;
  name: string;
  description: string;
  minGuestLimit: number;
  maxGuestLimit: number;
  vendorID: string;
  isDeleted: boolean;

  //navigation
  eventProducts: EventProduct[] | undefined;
  packageProducts: PackageProducts[] | undefined;
}

export enum EventTypes {
  Catering,
  Party
}

export interface EventProduct {

}

export interface PackageProducts {

}
