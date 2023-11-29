import {Injectable, Injector} from '@angular/core';
import {BaseCommonRestService} from "../base-common-rest-service.service";
import {Product} from "../../common-rest-models/product";

@Injectable({
  providedIn: 'root'
})
export class CommonProductsServiceService extends BaseCommonRestService<Product> {

  constructor(injector: Injector) {
    super(injector);
  }

  public getProducts() {
    return this.get("/products");
  }

  public addProduct(product: Product) {
    return this.post("/products", product);
  }
}
