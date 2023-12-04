import {Injectable, Injector} from '@angular/core';
import {BaseCommonRestService} from "../base-common-rest-service.service";
import {Product} from "../../common-rest-models/product";
import {environment} from "../../../../../vendors/src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CommonProductsService extends BaseCommonRestService {

  constructor(injector: Injector) {
    super(injector);
  }

  public getProducts() {
    return this.get<Product[]>(environment.apiUrl + "product");
  }

  public addProduct(product: Product) {
    return this.post<Product>("/products", product);
  }
}
