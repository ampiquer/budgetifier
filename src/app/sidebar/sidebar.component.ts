import { Component, OnInit } from '@angular/core';

import { Category } from '../shared/category';
import { CATEGORIES } from '../shared/categories';
import { Card } from '../shared/card';

import { Icon } from '../shared/icon';
import { ICONS } from '../shared/icons';

import { CategoryService } from '../services/category.service';

import { IconService } from '../services/icon.service';

import { DisplayService } from '../services/display.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    
    categories: Category[];
    
    selectedCategoryName: string;

    icons: Icon[];
    
    card: Card;

    constructor(
        private categoryService:CategoryService,
        private iconService: IconService,
        private displayService: DisplayService
    ) { }
    

    ngOnInit() {
      
       this.categoryService.getCategories()
      .then(categories => this.categories = categories);

      this.iconService.getIcons()
      .then(icons => this.icons = icons);
    
    }
    
onCategorySelect(categoryName: string) {
    this.selectedCategoryName = categoryName;
}
    
    addToCards() {
    this.displayService.addCard(this.selectedCategoryName).then(result => {
        this.card = result
    });
    }
}
