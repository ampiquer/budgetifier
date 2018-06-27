import { Component, OnInit } from '@angular/core';

import { DisplayService } from '../services/display.service';

import { Category } from '../shared/category';
import { CATEGORIES } from '../shared/categories';

import { Observable } from 'rxjs/Observable';

import { of } from 'rxjs/observable/of';



@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
    
cards: Category[];

constructor(private displayservice: DisplayService) { }

ngOnInit() {}
    
getCards(): Observable<any[]> {
    return of(this.cards);
}
}

