import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { ShoppingCartService } from './shopping-cart.service';

@Injectable()
export class ApiControllerService {
  public products: Product[] = [];

  // TODO: Remoove cart service reference
  constructor() {
    this.setProdutList();
  }

  public async setProdutList() {
    const result = await fetch('https://fakestoreapi.com/products/');
    this.products =  await result.json();
  }
}
