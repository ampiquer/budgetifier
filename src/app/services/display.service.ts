
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

  addCard(name: string, iconUrl: string): Promise<Card> {
      var newId;
      
    if (CARDS.length) {
        newId = Math.max.apply(
            Math,
            CARDS.map(function(card){return card.id;})
          ) + 1;
    } else {
        newId = 1;
    }
      
    const newCard = {
        id: newId,
      name: name,
      iconUrl: iconUrl
    };
      
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
    
removeCard(id: number): Promise<Card[]> {
    let index = CARDS.findIndex(el => el.id === id);

    if (index >= 0) {
        CARDS.splice(index,1);
    } return Promise.resolve(CARDS);
}
}