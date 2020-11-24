import { Component, OnInit } from '@angular/core';
import { Main } from '../../providers/Main';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-view',
  templateUrl: './page-view.page.html',
  styleUrls: ['./page-view.page.scss'],
})
export class PageViewPage implements OnInit {

  index;
  page;
  title;

  constructor(private main:Main, private actRouter:ActivatedRoute, private router:Router) {

  }

  databaseLoad() {
    this.page = this.main.pages[this.index].HTML;
    this.title = this.main.pages[this.index].title;
  }

  ngOnInit() {
    this.index = this.actRouter.snapshot.paramMap.get('index');
    this.databaseLoad();
  }

}
