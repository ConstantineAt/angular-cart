import { Component, DoCheck } from '@angular/core';
import { CartService } from '../cart.service';
import { Iproducts } from '../Iproducts';
import { products } from '../products';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements DoCheck {
  length: number = 0;
  products: Iproducts[] = products;

  constructor(private cartService: CartService) {}

  // getCartLength(): number {
  //   return this.cartService.cart.length;
  // }

  // getCartQuantity(): number {
  //   return this.cartService.getCartQuantity();
  // }

  ngDoCheck(): void {
    this.length = this.cartService.getCartLength()
  }
}
