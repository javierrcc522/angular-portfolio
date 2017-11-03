import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Website } from '../website.model';
import { WebsiteService } from '../website.service';

@Component({
  selector: 'app-website-detail',
  templateUrl: './website-detail.component.html',
  styleUrls: ['./website-detail.component.css'],
  providers: [WebsiteService]
})
export class WebsiteDetailComponent implements OnInit {
  websiteId: number;
  websiteToDisplay: Website;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private websiteService: WebsiteService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.websiteId = parseInt(urlParameters['id']);
    });
    this.websiteToDisplay = this.WebsiteService.getWebsiteById(this.websiteId);
  }
}
