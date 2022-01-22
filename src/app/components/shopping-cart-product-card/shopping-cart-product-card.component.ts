import { ShoppingCartProduct } from './../../models/product';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-cart-product-card',
  templateUrl: './shopping-cart-product-card.component.html',
  styleUrls: ['./shopping-cart-product-card.component.css'],
})
export class ShoppingCartProductCardComponent implements OnInit {
  @Input()
  product: ShoppingCartProduct;

  @Output()
  removeFromCart: EventEmitter<ShoppingCartProduct> = new EventEmitter<ShoppingCartProduct>();

  @Output()
  updateOrderTotal: EventEmitter<null> = new EventEmitter<null>();

  constructor() {}

  ngOnInit(): void {
    this.setTotalCost();
  }

  public setTotalCost() {
    this.product.totalPrice = this.product.quantity * this.product.product.price;
    this.updateOrderTotal.emit();
  }

  public adjustQuantity(amount: number) {
    this.product.quantity += amount;
    if (this.product.quantity === 0) {
      this.removeProduct();
    } else {
      this.setTotalCost();
    }
  }

  public removeProduct() {
    this.removeFromCart.emit(this.product);
    alert("Item removed from cart.")
  }
}
