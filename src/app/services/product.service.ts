import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Tablets' },
  ];

  private readonly products: Product[] = [
    // Smartphones
    { id: 101, categoryId: 1, name: 'Phone 1', description: 'Smartphone', price: 100000, rating: 4.8, imageUrl: 'https://via.placeholder.com/300', link: 'https://kaspi.kz/', likes: 0 },
    { id: 102, categoryId: 1, name: 'Phone 2', description: 'Smartphone', price: 120000, rating: 4.7, imageUrl: 'https://via.placeholder.com/300', link: 'https://kaspi.kz/', likes: 0 },
    { id: 103, categoryId: 1, name: 'Phone 3', description: 'Smartphone', price: 90000, rating: 4.6, imageUrl: 'https://via.placeholder.com/300', link: 'https://kaspi.kz/', likes: 0 },
    { id: 104, categoryId: 1, name: 'Phone 4', description: 'Smartphone', price: 150000, rating: 4.9, imageUrl: 'https://via.placeholder.com/300', link: 'https://kaspi.kz/', likes: 0 },
    { id: 105, categoryId: 1, name: 'Phone 5', description: 'Smartphone', price: 80000, rating: 4.5, imageUrl: 'https://via.placeholder.com/300', link: 'https://kaspi.kz/', likes: 0 },

    // Laptops
    { id: 201, categoryId: 2, name: 'Laptop 1', description: 'Laptop', price: 350000, rating: 4.7, imageUrl: 'https://via.placeholder.com/300', link: 'https://kaspi.kz/', likes: 0 },
    { id: 202, categoryId: 2, name: 'Laptop 2', description: 'Laptop', price: 420000, rating: 4.8, imageUrl: 'https://via.placeholder.com/300', link: 'https://kaspi.kz/', likes: 0 },
    { id: 203, categoryId: 2, name: 'Laptop 3', description: 'Laptop', price: 280000, rating: 4.6, imageUrl: 'https://via.placeholder.com/300', link: 'https://kaspi.kz/', likes: 0 },
    { id: 204, categoryId: 2, name: 'Laptop 4', description: 'Laptop', price: 500000, rating: 4.9, imageUrl: 'https://via.placeholder.com/300', link: 'https://kaspi.kz/', likes: 0 },
    { id: 205, categoryId: 2, name: 'Laptop 5', description: 'Laptop', price: 310000, rating: 4.5, imageUrl: 'https://via.placeholder.com/300', link: 'https://kaspi.kz/', likes: 0 },

    // Headphones
    { id: 301, categoryId: 3, name: 'Headphones 1', description: 'Headphones', price: 45000, rating: 4.8, imageUrl: 'https://via.placeholder.com/300', link: 'https://kaspi.kz/', likes: 0 },
    { id: 302, categoryId: 3, name: 'Headphones 2', description: 'Headphones', price: 65000, rating: 4.7, imageUrl: 'https://via.placeholder.com/300', link: 'https://kaspi.kz/', likes: 0 },
    { id: 303, categoryId: 3, name: 'Headphones 3', description: 'Headphones', price: 30000, rating: 4.6, imageUrl: 'https://via.placeholder.com/300', link: 'https://kaspi.kz/', likes: 0 },
    { id: 304, categoryId: 3, name: 'Headphones 4', description: 'Headphones', price: 90000, rating: 4.9, imageUrl: 'https://via.placeholder.com/300', link: 'https://kaspi.kz/', likes: 0 },
    { id: 305, categoryId: 3, name: 'Headphones 5', description: 'Headphones', price: 55000, rating: 4.5, imageUrl: 'https://via.placeholder.com/300', link: 'https://kaspi.kz/', likes: 0 },

    // Tablets
    { id: 401, categoryId: 4, name: 'Tablet 1', description: 'Tablet', price: 180000, rating: 4.7, imageUrl: 'https://via.placeholder.com/300', link: 'https://kaspi.kz/', likes: 0 },
    { id: 402, categoryId: 4, name: 'Tablet 2', description: 'Tablet', price: 220000, rating: 4.8, imageUrl: 'https://via.placeholder.com/300', link: 'https://kaspi.kz/', likes: 0 },
    { id: 403, categoryId: 4, name: 'Tablet 3', description: 'Tablet', price: 140000, rating: 4.6, imageUrl: 'https://via.placeholder.com/300', link: 'https://kaspi.kz/', likes: 0 },
    { id: 404, categoryId: 4, name: 'Tablet 4', description: 'Tablet', price: 260000, rating: 4.9, imageUrl: 'https://via.placeholder.com/300', link: 'https://kaspi.kz/', likes: 0 },
    { id: 405, categoryId: 4, name: 'Tablet 5', description: 'Tablet', price: 160000, rating: 4.5, imageUrl: 'https://via.placeholder.com/300', link: 'https://kaspi.kz/', likes: 0 },
  ];

  getCategories(): Category[] {
    return this.categories;
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter(p => p.categoryId === categoryId);
  }
}