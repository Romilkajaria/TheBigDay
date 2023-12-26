import {TBDItem} from "./item";

export interface Product extends TBDItem {
  //navigation
  eventProducts: EventProduct[] | undefined;
  packageProducts: PackageProducts[] | undefined;
}

export interface EventProduct {

}

export interface PackageProducts {

}
