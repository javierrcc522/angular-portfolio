import { Component, Input, OnInit } from '@angular/core';
import { WebsiteService } from '../website.service';

@Component({
  selector: 'app-edit-website',
  templateUrl: './edit-website.component.html',
  styleUrls: ['./edit-website.component.css'],
  providers: [WebsiteService]
})
export class EditWebsiteComponent implements OnInit {
  @Input() selectedWebsite;

  constructor(private websiteService: WebsiteService) { }

  ngOnInit() {
  }

  beginUpdatingWebsite(websiteToUpdate){
    this.websiteService.updateWebsite(websiteToUpdate);
  }

}
