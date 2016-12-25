import { Component } from '@angular/core';
import { Category, CategoryService } from '../category/category.service';

@Component({
  selector: 'db-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  cardCategories: Category[];

  constructor(
    private categoryService: CategoryService
  ) {
    this.cardCategories = this.categoryService.getCategories();
  }

  selectCategory(category: Category) {
    console.log('Selected category', category.title);
  }
}
