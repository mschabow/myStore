import { ShoppingCartProduct } from './product';
export interface Order {
  customer: Customer;
  products: ShoppingCartProduct[];
}

export interface Customer {
  name?: string;
  phoneNumber?: string;
  address?: string;
  creditCard?: string;
}
