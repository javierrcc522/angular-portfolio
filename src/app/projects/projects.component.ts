import { Component, OnInit } from '@angular/core';
import { Website } from '../website.model';
import { Router } from '@angular/router';
import { WebsiteService } from '../website.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [WebsiteService]
})

export class ProjectsComponent implements OnInit {
  websites: FirebaseListObservable<any[]>;

  constructor(private router: Router, private websiteService: WebsiteService){}

  ngOnInit(){
    this.websites = this.websiteService.getWebsites();
  }

  goToDetailPage(clickedWebsite: Website) {
  //  this.router.navigate(['websites', clickedWebsite.id]);
  };
}
