import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CarouselModule } from 'ng2-bootstrap';

import { CategoryCardComponent } from './category-card.component';
import { CategorySlideComponent } from './category-slide.component';
import { CategoryListComponent } from './category-list.component';

import { CategoryService } from './category.service';

import { CategoryTitlePipe } from './category.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CarouselModule
  ],
  declarations: [
    CategoryCardComponent,
    CategorySlideComponent,
    CategoryListComponent,
    CategoryTitlePipe
],
  exports: [
    CategoryCardComponent,
    CategorySlideComponent,
    CategoryListComponent,
    CategoryTitlePipe
  ],
  providers: [
    CategoryService
  ]

})
export class CategoryModule { }
