import { Component, OnInit } from '@angular/core';
import { Website } from '../website.model';
import { WebsiteService } from '../website.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [WebsiteService]
})
export class AdminComponent implements OnInit {

  constructor(private websiteService: WebsiteService) { }

  ngOnInit() {
  }

  submitForm(title: string, technology: string, description: string) {
    let newWebsite: Website = new Website(title, technology, description);
    this.websiteService.addWebsite(newWebsite);
  }
}
