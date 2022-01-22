import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-order-confirmation-page',
  templateUrl: './order-confirmation-page.component.html',
  styleUrls: ['./order-confirmation-page.component.css'],
})
export class OrderConfirmationPageComponent implements OnInit {
  constructor(private cartService: ShoppingCartService) {}
  orderAmount: number;
  customerName: string;

  ngOnInit(): void {

    this.orderAmount = this.cartService.totalPrice;
    this.customerName = this.cartService.customer.name!;

    this.cartService.products = [];
    this.cartService.customer = {};
  }
}
