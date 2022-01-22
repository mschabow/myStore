import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ApiControllerService } from 'src/app/services/api-controller.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  constructor(
    public apiController: ApiControllerService,
    private cartService: ShoppingCartService
  ) {}

  async ngOnInit(): Promise<void> {}

  public addToCart(product: Product) {
    this.cartService.addProduct(product);
  }
}
