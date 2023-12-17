import {Injectable, Injector} from '@angular/core';
import {BaseCommonRestService} from "../base-common-rest-service.service";
import {Product} from "../../common-rest-models/product";
import {environment} from "../../../../../vendors/src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CommonProductsService extends BaseCommonRestService {

  private readonly productUrl = environment.apiUrl + "product";
  constructor(injector: Injector) {
    super(injector);
  }

  public getProducts() {
    return this.get<Product[]>(this.productUrl);
  }

  public addProduct(product: Product) {
    return this.post<Product>(this.productUrl, product);
  }

  public updateProduct(product: Product) {
    return this.put<Product>(`${this.productUrl}/${product.id}`, product);
  }
}
