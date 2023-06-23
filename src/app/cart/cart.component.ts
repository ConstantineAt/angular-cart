import { Component, OnInit, DoCheck } from '@angular/core';
import { Iproducts } from '../Iproducts';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  cart: Iproducts[] = [];
  subTotal : number =0;
  length: number = 0;
  tax: number = 0;
  total: number = 0;
  totalDiscount: number = 0;

  constructor(private cartService: CartService){}

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.subTotal = this.cartService.calculateSubTotal();
    this.tax = this.cartService.calculateTax();
    this.total = this.cartService.calculateTotal();
    this.totalDiscount = this.cartService.calculateTotalDiscount();
  }

  removeFromCart(i : number){
    this.cartService.removeFromCart(i);
    this.subTotal = this.cartService.calculateSubTotal();
    this.tax = this.cartService.calculateTax();
    this.total = this.cartService.calculateTotal();
    this.totalDiscount = this.cartService.calculateTotalDiscount();
  }

  addQuantity(productId: number) {
    this.cartService.addQuantity(productId);
    this.subTotal = this.cartService.calculateSubTotal();
    this.tax = this.cartService.calculateTax();
    this.total = this.cartService.calculateTotal();
    this.totalDiscount = this.cartService.calculateTotalDiscount();
  }

  removeQuantity(i: number){
    this.cartService.removeQuantity(i);
    this.subTotal = this.cartService.calculateSubTotal();
    this.tax = this.cartService.calculateTax();
    this.total = this.cartService.calculateTotal();
    this.totalDiscount = this.cartService.calculateTotalDiscount();
  }

  ngDoCheck(): void {
    this.length = this.cartService.getCartLength()
  }

}
