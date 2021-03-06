import { Injectable } from '@angular/core';
import { Website } from './website.model';
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

  updateWebsite(localUpdatedWebsite){
    var websiteEntryInFirebase = this.getWebsiteById(localUpdatedWebsite.$key);
    websiteEntryInFirebase.update({title: localUpdatedWebsite.title,
                                  technology: localUpdatedWebsite.technology,
                                  description: localUpdatedWebsite.description});
  }

  deleteWebsite(localWebsiteToDelete){
    var websiteEntryInFirebase = this.getWebsiteById(localWebsiteToDelete.$key);
    websiteEntryInFirebase.remove();
  }


}
