import { Injectable } from '@angular/core';
import { Website } from './website.model';
import { WEBSITES } from './mock-websites';

@Injectable()
export class WebsiteService {

  constructor() { }

  getWebsites() {
    return WEBSITES;
  }

  getWebsiteById(websiteId: number){
    for (var i = 0; i <= WEBSITES.length - 1; i++) {
      if (WEBSITES[i].id === websiteId) {
        return WEBSITES[i];
      }
    }
  }

}
