import { ApiControllerService } from './../../services/api-controller.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {

  product: Product;

  constructor(
    private activeRouter: ActivatedRoute,
    private apiService: ApiControllerService,
    public cartService: ShoppingCartService
  ) {
    this.activeRouter.paramMap.subscribe((params: ParamMap) => {
      const id = Number(params.get('id'));

      this.product = apiService.products.find(p => p.id === id)!
    });
  }

  ngOnInit(): void {}

  public addToCart(product: Product) {
    this.cartService.addProduct(product);
  }
}
