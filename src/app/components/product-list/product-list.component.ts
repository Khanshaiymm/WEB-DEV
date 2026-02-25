import { Component, input } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductItemComponent } from '../product-item/product-item';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = input.required<Product[]>();

  onDelete(id: number) {
    const updated = this.products().filter(p => p.id !== id);
    (this.products() as Product[]).splice(0, this.products().length, ...updated);
  }
}