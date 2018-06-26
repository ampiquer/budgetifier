import { Injectable } from '@angular/core';

import { Category } from '../shared/category';
import { CATEGORIES } from '../shared/categories';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }
    
  getCategories(): Promise<Category[]> {
    return Promise.resolve(CATEGORIES);
  }

  getCategory(id: number): Promise<Category> {
    return Promise.resolve(CATEGORIES.filter((category) => (category.id === id))[0]);
  }
}
