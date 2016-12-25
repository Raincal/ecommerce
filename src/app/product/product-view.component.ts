import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, ProductService } from './product.service';
import { Cart, CartItem, CartService } from '../cart/cart.service';

@Component({
    selector: 'db-product-view',
    templateUrl: './product-view.component.html',
    styles: [`
      .form-control-static {
        line-height: 1;
        padding-left: .5rem;
      }
    `]
})
export class ProductViewComponent {
  product: Product;
  cartItem: CartItem;

  get quantity(): number {
      return this.cartItem ? this.cartItem.count : 0;
  }

  get amount(): number {
      return this.cartItem ? this.cartItem.amount : 0;
  }

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {
    this.route
      .params
      .subscribe(params => {
        let id: string = params['id'];
        this.product = this.productService.getProduct(id);
        this.cartItem = this.cartService.findItem(id);
      });
  }

  addToCart() {
    this.cartItem = this.cartService.addProduct(this.product);
  }

  removeFromCart() {
    this.cartItem = this.cartService.removeProduct(this.product);
  }
}
