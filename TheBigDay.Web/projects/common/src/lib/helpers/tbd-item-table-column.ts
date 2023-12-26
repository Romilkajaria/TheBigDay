import {KeyValue} from "@angular/common";

export enum TBDItemColumnNames {
  NAME = 'Name',
  DESCRIPTION = 'Description',
  MIN_GUEST_LIMIT = 'Min. Guest Limit',
  MAX_GUEST_LIMIT = 'Max. Guest Limit',
  IS_DELETED = "Disabled",
  PRICE = "Price",
  PRICE_TYPE = 'Price Type'
}

export const TBDItemColumnMap: KeyValue<TBDItemColumnNames, string>[] = [
  {key: TBDItemColumnNames.NAME, value: 'name'},
  {key: TBDItemColumnNames.MIN_GUEST_LIMIT, value: 'minGuestLimit'},
  {key: TBDItemColumnNames.MAX_GUEST_LIMIT, value: 'maxGuestLimit'},
  {key: TBDItemColumnNames.IS_DELETED, value: 'isDeleted'},
  {key: TBDItemColumnNames.PRICE, value: 'price'},
  {key: TBDItemColumnNames.PRICE_TYPE, value: 'priceType'}
];
