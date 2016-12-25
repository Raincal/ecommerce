import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'db-product-search',
  templateUrl: './product-search.component.html',
})
export class ProductSearchComponent implements OnInit {
  disabled: boolean = true;

  constructor(private router: Router) {}

  ngOnInit() {
  }

  searchProduct(value: string) {
    this.router.navigate(['/products'], { queryParams: { search: value} });
  }

  searchChanged(value: string) {
    if (value) {
      this.disabled = false;
    } else {
      this.disabled = true;
    }
  }

}
