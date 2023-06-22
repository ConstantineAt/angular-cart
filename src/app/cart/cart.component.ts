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
  total : number =0;
  length: number = 0;

  constructor(private cartService: CartService){}

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.total = this.cartService.calculateTotal();
  }

  removeFromCart(i : number){
    this.cartService.removeFromCart(i);
    this.total = this.cartService.calculateTotal();
  }

  addQuantity(productId: number) {
    this.cartService.addQuantity(productId);
    this.total = this.cartService.calculateTotal();
  }

  removeQuantity(i: number){
    this.cartService.removeQuantity(i);
    this.total = this.cartService.calculateTotal();
  }

  ngDoCheck(): void {
    this.length = this.cartService.getCartLength()
  }

}
