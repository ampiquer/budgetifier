
import { Injectable } from '@angular/core';
import { Category } from '../shared/category';
import { Card } from '../shared/card';
import { CATEGORIES } from '../shared/categories';
import { CARDS } from '../shared/cards';
import { Observable } from 'rxjs/Observable';
import { CategoryService } from '../services/category.service';

import 'rxjs/add/operator/map';


@Injectable()
export class DisplayService {

  cards: Array<any>;
categories: Category[];
    

  constructor(
  private categoryservice: CategoryService) {
      
    this.cards = [];
  }

  addCard(name: string): Promise<Card> {
    const newCard = {id: null, name: name};
    CARDS.push(newCard);
    return Promise.resolve(newCard);
  }

  isCard(id: number): boolean {
        return this.cards.some(el => el === id);
  }

getCard(id: number): Promise<Card> {
    return Promise.resolve(CARDS.filter((card) => (card.id === id))[0]);
  }
    
getCards(): Promise<Card[]> {
    return Promise.resolve(CARDS);
}
    
removeCard(id: number) {
    
}
}