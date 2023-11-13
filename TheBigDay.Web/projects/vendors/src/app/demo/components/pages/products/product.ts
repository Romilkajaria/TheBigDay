export interface IVendorItem<T> {
  id: number,
  name: string,
  description: string,
  type: T,
  minGuestLimit?: number,
  maxGuestLimit?: number,
  status: ItemStatus
}

export enum ProductType {
  Catering,
  Party
}

export enum ItemStatus {
  Active,
  Inactive,
  OnHold
}
