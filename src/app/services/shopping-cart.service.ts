import { Product, ShoppingCartProduct } from './../models/product';
import { Injectable } from '@angular/core';
import { Customer } from '../models/order';
import { first } from 'rxjs';

@Injectable()
export class ShoppingCartService {
  public products: ShoppingCartProduct[] = [];
  public customer: Customer;
  public totalPrice: number = 0;
  public productDetails: Product;
  public cartItemCount: number = 0;

  constructor() {
    this.customer = {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      address: '',
      creditCard: '',
    };
  }
  public addProduct(product: Product) {
    const productIndex = this.products.findIndex(
      (p) => p.product.id === product.id
    );
    if (productIndex === -1) {
      this.products.push({ quantity: 1, product: product });
    } else {
      this.products[productIndex].quantity++;
    }
    this.updateOrderTotal();
  }

  public removeProduct(product: ShoppingCartProduct) {
    const index = this.products.findIndex(
      (p) => p.product.id === product.product.id
    );
    if (index > -1) {
      this.products.splice(index, 1);
    }
    this.updateOrderTotal();
  }

  updateOrderTotal() {
    this.totalPrice = 0;
    this.cartItemCount = 0;
    this.products.forEach((p) => {
      p.totalPrice = p.product.price * p.quantity;
      this.totalPrice = this.totalPrice + p.product.price * p.quantity;
      this.cartItemCount = this.cartItemCount + p.quantity;
    });
  }
}
