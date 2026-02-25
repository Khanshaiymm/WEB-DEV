import { Component } from '@angular/core';
import { ProductService } from './services/product.service';
import { Category } from './models/category.model';
import { Product } from './models/product.model';
import { ProductListComponent } from './components/product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  categories: Category[] = [];

  selectedCategoryId: number | null = null;
  selectedProducts: Product[] = [];

  constructor(private productService: ProductService) {
    this.categories = this.productService.getCategories();
  }

  selectCategory(id: number) {
    this.selectedCategoryId = id;
    this.selectedProducts =
      this.productService.getProductsByCategory(id).map(p => ({ ...p }));
  }
}