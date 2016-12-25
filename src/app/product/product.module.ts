import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CategoryModule } from '../category/category.module';

import { ProductListComponent } from './product-list.component';
import { ProductSearchComponent } from './product-search.component';
import { ProductGridComponent } from './product-grid.component';
import { ProductCardComponent } from './product-card.component';
import { ProductViewComponent } from './product-view.component';

import { ProductService } from './product.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    CategoryModule
  ],
  declarations: [
    ProductListComponent,
    ProductSearchComponent,
    ProductGridComponent,
    ProductCardComponent,
    ProductViewComponent
  ],
  exports: [
    ProductListComponent,
    ProductSearchComponent,
    ProductGridComponent,
    ProductCardComponent,
    ProductViewComponent
  ],
  providers: [
    ProductService
  ]
})
export class ProductModule { }
