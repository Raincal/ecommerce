import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DropdownModule } from 'ng2-bootstrap';

import { CartMenuComponent } from './cart-menu.component';
import { CartService } from './cart.service';
import { CartViewComponent } from './cart-view.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    DropdownModule
  ],
  declarations: [
    CartMenuComponent,
    CartViewComponent
  ],
  exports: [
    CartMenuComponent,
    CartViewComponent
  ],
  providers: [
    CartService
  ]
})
export class CartModule { }
