# Mystore

This project utilizes data from fakestoreapi.com to populate products in a store. The user can view the product details, add items to a cart, adjust quantities and remove items from the cart, and checkout. After checkout, the cart is cleared and the user receives a confirmation that the order has been placed.

## Pages
### Product List - (default endpoint)
This page shows users products, an image, and the price of the products available to buy. A user can add an item to the shopping cart from this page. When an item, the user is notified of this via a popup message.
### Product Details (/details)
This shows the product details of a selected product. A user can add the item to the shopping cart from this page. When an item, the user is notified of this via a popup message.
### Shopping Cart (/cart)
Shows the prices and quantities of the items in the cart, as well as the total price and a button to complete the purchase.
### Checkout Form (/checkout)
Allows the user to enter their details to complete the purchase.
### Order Confirmation Page (/confirmation)
Confirms that the user's order has been submitted

## Libraries Used
* Angular Material UI for style


## Running the App
Run `ng install` to install the required modules.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
