
import { Injectable } from '@angular/core';
import { Category } from '../shared/category';
import { CATEGORIES } from '../shared/categories';
import { Observable } from 'rxjs/Observable';
import { CategoryService } from '../services/category.service';


@Injectable()
export class DisplayService {

  cards: Array<any>;
categories: Category[];
    

  constructor(
  private categoryservice: CategoryService) {
      
    this.cards = [];
  }

  addCard(id: number): boolean {
        if(!this.isCard(id))
            this.cards.push(id);
            return true;
  }

  isCard(id: number): boolean {
        return this.cards.some(el => el === id);
  }
      getCard(): Promise<Category[]> {
    return Promise.resolve(CATEGORIES);
  }

  getCards(id: number): Promise<Category> {
    return Promise.resolve(CATEGORIES.filter((category) => (category.id === id))[0]);
  }
}