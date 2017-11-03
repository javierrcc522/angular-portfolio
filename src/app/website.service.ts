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

  addWebsite(newWebsite: Website) {
    this.websites.push(newWebsite);
  }

  getWebsiteById(websiteId: string){
    return this.database.object('websites/' + websiteId);
  }

}
