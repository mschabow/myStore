import { Customer } from './../../models/order';
import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css'],
})
export class CheckoutFormComponent implements OnInit {
  public customer: Customer;

  constructor(public cartService: ShoppingCartService, private route: Router) {
    this.customer = cartService.customer;
  }

  ngOnInit(): void {
    this.cartService.updateOrderTotal();
  }

  onSubmit(): void {
    this.route.navigateByUrl('/confirmation');
  }
}
