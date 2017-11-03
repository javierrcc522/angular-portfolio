import { Component, Input, OnInit } from '@angular/core';
import { Website } from '../website.model';

@Component({
  selector: 'app-edit-website',
  templateUrl: './edit-website.component.html',
  styleUrls: ['./edit-website.component.css']
})
export class EditWebsiteComponent implements OnInit {
  @Input() selectedWebsite;

  constructor() { }

  ngOnInit() {
  }

}
