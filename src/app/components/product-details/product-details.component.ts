import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  constructor(public cartService: ShoppingCartService) {}

  ngOnInit(): void {}

  public addToCart(product: Product) {
    this.cartService.addProduct(product);
  }
}
