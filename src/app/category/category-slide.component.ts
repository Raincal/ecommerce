import { Component } from '@angular/core';

@Component({
  selector: 'db-category-slide',
  templateUrl: './category-slide.component.html',
})
export class CategorySlideComponent {
  public myInterval: number = 5000;
  public noWrapSlides: boolean = false;
  public slides = [];

  constructor() {
    for (let i = 0; i < 3; i++) {
      this.addSlide();
    }
  }

  public addSlide(): void {
    this.slides.push({
      image: 'http://placehold.it/1110x480',
      text: ['Bread & Pastry', 'Seafood', 'Fruits & Vegetables'][this.slides.length % 3]
    });
  }

}
