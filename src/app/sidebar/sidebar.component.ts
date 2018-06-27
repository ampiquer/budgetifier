import { Component, OnInit } from '@angular/core';

import { Category } from '../shared/category';
import { CATEGORIES } from '../shared/categories';

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
    
    category: Category;

    icons: Icon[];
    
    card: boolean;

    constructor(private categoryService:CategoryService,
private iconService: IconService,
    private displayService: DisplayService) { }
    


    ngOnInit() {
      
       this.categoryService.getCategories()
      .then(categories => this.categories = categories);

      this.iconService.getIcons()
      .then(icons => this.icons = icons);
    
}
    
    addToCards() {
    console.log('Adding to cards', this.category.id);
    this.card = this.displayService.addCard(this.category.id);
    }
}
