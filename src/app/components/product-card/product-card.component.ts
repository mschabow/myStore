import { Router } from '@angular/router';
import { ShoppingCartService } from './../../services/shopping-cart.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() product: Product;

  @Input() displayDetails: boolean = true;

  @Output()
  addToCart: EventEmitter<Product> = new EventEmitter<Product>();

  @Output()
  showProductDetails: EventEmitter<Product> = new EventEmitter<Product>();

  constructor(private route:Router) {}

  ngOnInit(): void {}

  public productAdded(addedProduct: Product) {
    this.addToCart.emit(addedProduct);
  }

  public showDetails(detailsProduct: Product) {
    this.showProductDetails.emit(detailsProduct);
    this.route.navigateByUrl('/details')

  }
}
