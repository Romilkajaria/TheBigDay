export interface Product {
  id: string | undefined;
  name: string;
  description: string;
  minGuestLimit: number;
  maxGuestLimit: number;
  vendorID: string;
  isDeleted: boolean;
  price: number;
  priceType: PriceType;

  //navigation
  eventProducts: EventProduct[] | undefined;
  packageProducts: PackageProducts[] | undefined;
}

export enum PriceType {
  PER_PERSON,
  FLAT
}

export const priceTypeLabelMap: Record<PriceType, string> = {
  [PriceType.PER_PERSON]: 'Per person',
  [PriceType.FLAT]: 'Flat'
}

export interface EventProduct {

}

export interface PackageProducts {

}
