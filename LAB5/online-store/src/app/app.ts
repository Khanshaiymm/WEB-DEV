import { Component } from '@angular/core';
import { ProductService } from './services/product.service';
import { Category } from './models/category.model';
import { Product } from './models/product.model';
import { ProductListComponent } from './components/product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  categories: Category[] = [];

  // null = ALL
  selectedCategoryId: number | null = null;

  allProducts: Product[] = [];
  selectedProducts: Product[] = [];

  constructor(private productService: ProductService) {
    this.categories = this.productService.getCategories();

    // собираем все товары (20)
    this.allProducts = [
      ...this.productService.getProductsByCategory(1),
      ...this.productService.getProductsByCategory(2),
      ...this.productService.getProductsByCategory(3),
      ...this.productService.getProductsByCategory(4),
    ].map(p => ({ ...p })); // копия

    this.selectAll(); // показываем ALL сразу
  }

  selectAll() {
    this.selectedCategoryId = null;
    this.selectedProducts = this.allProducts.map(p => ({ ...p }));
  }

  selectCategory(id: number) {
    this.selectedCategoryId = id;
    this.selectedProducts =
      this.productService.getProductsByCategory(id).map(p => ({ ...p }));
  }
}