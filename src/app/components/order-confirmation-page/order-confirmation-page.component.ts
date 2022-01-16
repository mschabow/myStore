import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-order-confirmation-page',
  templateUrl: './order-confirmation-page.component.html',
  styleUrls: ['./order-confirmation-page.component.css']
})
export class OrderConfirmationPageComponent implements OnInit {

  constructor(private cartService: ShoppingCartService) { }
  customerName: string;
  orderAmount: number;



  ngOnInit(): void {
    this.customerName = `${this.cartService.customer.firstName} ${this.cartService.customer.lastName}`;
    this.orderAmount = this.cartService.totalPrice;

    this.cartService.products = [];
    this.cartService.customer = {};
  }

}
