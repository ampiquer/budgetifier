import { Injectable } from '@angular/core';

import { Icon } from '../shared/icon';
import { ICONS } from '../shared/icons';

@Injectable({
  providedIn: 'root'
})
export class IconService {

  constructor() { }
    
  getIcons(): Promise<Icon[]> {
    return Promise.resolve(ICONS);
  }

  getIcon(imgId: number): Promise<Icon> {
    return Promise.resolve(ICONS.filter((icon) => (icon.imgId === imgId))[0]);
  }
}