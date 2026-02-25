import { Component, input, output } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  templateUrl: './product-item.html',
  styleUrls: ['./product-item.css'],
})
export class ProductItemComponent {
  product = input.required<Product>();
  delete = output<number>();

  like() {
    this.product().likes += 1;
  }

  remove() {
    this.delete.emit(this.product().id);
  }

  shareWhatsApp() {
    const url = encodeURIComponent(this.product().link);
    const text = encodeURIComponent(`Check this out: ${this.product().name}`);
    window.open(`https://wa.me/?text=${text}%20${url}`, '_blank');
  }

  shareTelegram() {
    const url = encodeURIComponent(this.product().link);
    const text = encodeURIComponent(`Check this out: ${this.product().name}`);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  }
}