import { ShoppingCartProduct } from './product';
export interface Order{
  customer: Customer;
  products: ShoppingCartProduct[];

}

export interface Customer {
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  address?: string;
  creditCard?: string;
}
