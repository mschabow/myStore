import { ShoppingCartProduct } from './../../models/product';
import { ShoppingCartService } from './../../services/shopping-cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(public cartService: ShoppingCartService) { }

  ngOnInit(): void {
  }
  public removeFromCart(product: ShoppingCartProduct){
    this.cartService.removeProduct(product);
  }
  public updateOrderTotal(){
    this.cartService.updateOrderTotal()
  }

}
