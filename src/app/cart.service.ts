import { Injectable } from '@angular/core';
import { Iproducts } from './Iproducts';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Iproducts[] = [];
  constructor() { }

  //*** Variant 1 ***//
  // addQuantity(productId: number) {
  //   const product = this.cart.find((item) => item.id === productId);
  //   if (product) {
  //     product.quantity++;
  //   }
  // }
  //*** Variant 2 ***//
  addQuantity(productId: number) {
    for (let i = 0; i < this.cart.length; i++) {
      if (this.cart[i].id === productId) {
        this.cart[i].quantity++;
        break;
      }
    }
  }

  removeQuantity(i: number) {
    // for (let i in this.cart) {
    this.cart[i].quantity--;
    if (this.cart[i].quantity == 0) {
      this.removeFromCart(Number(i));
      // }
    }
  }

  removeFromCart(i: number) {
    this.cart[i].quantity = 1;
    this.cart.splice(i, 1);
  }

  addToCart(obj: Iproducts) {
    // const existingProduct = this.cart.find((product) => product.id === obj.id); *** Or write like this ***
    let existingProduct = null;
    for (let i = 0; i < this.cart.length; i++) {
      const product = this.cart[i];
      if (product.id === obj.id) {
        existingProduct = product;
        break;
      }
    }

    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      this.cart.push(obj);
    }
    
  }

  getCart() {
    return this.cart;
  }

  clearCart() {
    this.cart = [];
    return this.cart;
  }

  calculateTotal() {
    let total: number = 0;
    for (let val of this.cart) {
      total = total + val.price * val.quantity;
    }
    return total;
  }

  getCartLength(): number {
    return this.cart.length;
  }

  // getCartQuantity(): number {
  //   return this.cart.reduce((total, product) => total + product.quantity, 0);
  // }

  getCartQuantity(): number {
    let totalQuantity = 0;
    for (const product of this.cart) {
      totalQuantity += product.quantity;
    }
    return totalQuantity;
  }

}
