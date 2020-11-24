import { Component, OnInit } from '@angular/core';
import { Main } from '../../providers/Main';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.page.html',
  styleUrls: ['./page-list.page.scss'],
})
export class PageListPage implements OnInit {

  index;
  chapters;
  pages;
  title;

  constructor(private main:Main, private actRouter:ActivatedRoute, private router:Router) {

  }

  goPage(i) {
    this.main.pages = this.pages;
    this.main.pageIndex = i;
    this.router.navigate(['/page-view', i]);
  }

  databaseLoad() {
    this.chapters = this.main.chapters;
    this.pages = this.chapters[this.index].pageList;
    this.title = this.chapters[this.index].title;
  }

  ngOnInit() {
    this.index = this.actRouter.snapshot.paramMap.get('index');
    this.databaseLoad();
  }

}
