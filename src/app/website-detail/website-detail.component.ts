import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Website } from '../website.model';
import { WebsiteService } from '../website.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-website-detail',
  templateUrl: './website-detail.component.html',
  styleUrls: ['./website-detail.component.css'],
  providers: [WebsiteService]
})
export class WebsiteDetailComponent implements OnInit {
  websiteId: string;
  websiteToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private websiteService: WebsiteService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.websiteId = urlParameters['id'];
    });
    this.websiteToDisplay = this.websiteService.getWebsiteById(this.websiteId);
  }
}
