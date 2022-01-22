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

  constructor(private route:Router) {}

  ngOnInit(): void {}

  public productAdded(addedProduct: Product) {
    this.addToCart.emit(addedProduct);
    alert(`The item has been added to the cart.`);
  }

  public showDetails(detailsProduct: Product) {
    this.route.navigateByUrl(`/details/${detailsProduct.id}`)

  }
}
