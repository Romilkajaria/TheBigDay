import {TBDItem} from "./item";

export interface Service extends TBDItem {
  //navigation
  eventProducts: EventServices[] | undefined;
  packageProducts: PackageServices[] | undefined;
}

export interface EventServices {

}

export interface PackageServices {

}
