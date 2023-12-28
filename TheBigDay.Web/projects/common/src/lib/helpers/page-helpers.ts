import {PriceType, priceTypeLabelMap} from "../common-rest-models/item";
import {KeyValue} from "@angular/common";

export const DialogPriceTypeOptions: KeyValue<PriceType, string>[] = [
  {key: PriceType.PER_PERSON, value: priceTypeLabelMap[PriceType.PER_PERSON]},
  {key: PriceType.FLAT, value: priceTypeLabelMap[PriceType.FLAT]}
]

export function GetPriceTypeCellData(rowDatum: PriceType) {
  return priceTypeLabelMap[rowDatum];
}
