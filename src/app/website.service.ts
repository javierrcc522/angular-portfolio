import { Injectable } from '@angular/core';
import { Website } from './website.model';
import { WEBSITES } from './mock-websites';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class WebsiteService {
  websites: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.websites = database.list('websites');
  }

  getWebsites() {
    return this.websites;
  }

  getWebsiteById(websiteId: number){
    for (var i = 0; i <= WEBSITES.length - 1; i++) {
      if (WEBSITES[i].id === websiteId) {
        return WEBSITES[i];
      }
    }
  }

}
