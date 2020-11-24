import { Component, OnInit } from '@angular/core';
import { Main } from '../../providers/Main';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chapter-list',
  templateUrl: './chapter-list.page.html',
  styleUrls: ['./chapter-list.page.scss'],
})
export class ChapterListPage implements OnInit {

  index;
  sections;
  chapters;
  title;

  constructor(private main:Main, private actRouter:ActivatedRoute, private router:Router) {

  }

  goPageList(i) {
    this.main.chapterIndex = i;
    this.main.chapters = this.chapters;
    this.router.navigate(['/page-list', i]);
  }

  databaseLoad() {
    this.sections = this.main.sections;
    this.chapters = this.sections[this.index].chapterList;
    this.title = this.sections[this.index].title;
  }

  ngOnInit() {
    this.index = this.actRouter.snapshot.paramMap.get('index');
    this.databaseLoad();
  }

}
