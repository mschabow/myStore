import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ApiControllerService } from './services/api-controller.service';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CheckoutFormComponent } from './components/checkout-form/checkout-form.component';
import { OrderConfirmationPageComponent } from './components/order-confirmation-page/order-confirmation-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { MatButtonModule } from '@angular/material/button';
import { ShoppingCartService } from './services/shopping-cart.service';
import { ShoppingCartProductCardComponent } from './components/shopping-cart-product-card/shopping-cart-product-card.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'details', component: ProductDetailsComponent },
  { path: 'cart', component: ShoppingCartComponent },
  { path: 'checkout', component: CheckoutFormComponent },
  { path: 'confirmation', component: OrderConfirmationPageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ShoppingCartComponent,
    CheckoutFormComponent,
    OrderConfirmationPageComponent,
    ProductCardComponent,
    ShoppingCartProductCardComponent,
    ProductDetailsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    FlexLayoutModule,
    MatButtonModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule,
    FormsModule,
  ],
  providers: [ApiControllerService, ShoppingCartService],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(
    private apiConrollerService: ApiControllerService,
    private shoppingCartService: ShoppingCartService
  ) {}
}
