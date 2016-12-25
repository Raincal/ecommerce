import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product/product-list.component';
import { ProductViewComponent } from './product/product-view.component';
import { CartViewComponent } from './cart/cart-view.component';
import { CheckoutViewComponent } from './checkout/checkout-view.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'product/:id', component: ProductViewComponent },
  { path: 'cart', component: CartViewComponent },
  { path: 'checkout', component: CheckoutViewComponent },
];

export const routing = RouterModule.forRoot(routes);
