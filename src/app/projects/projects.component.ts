import { Component } from '@angular/core';
import { Website } from '../website.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
  export class ProjectsComponent {

    constructor(private router: Router){}

    websites: Website[] = [
      new Website("PDX-EATS", "Ruby, Sinatra, Postgress, HTML, CSS, Javascript", "A webapp where users can create accounts, write reviews, and view other user's reviews.", 1)
    ];
  }


  goToDetailPage(clickedWebsite: Website) {
   this.router.navigate(['websites', clickedWebsite.id]);
 };


};
