import { Component } from '@angular/core';
import { Iproducts } from '../Iproducts';
import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products: Iproducts[] = products;

  constructor(private cartService: CartService) {}

  addToCart(product: Iproducts): void {
    alert("Product was added to the Cart");
    this.cartService.addToCart(product);
  }
}
