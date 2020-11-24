import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterListPage } from './chapter-list.page';

describe('ChapterListPage', () => {
  let component: ChapterListPage;
  let fixture: ComponentFixture<ChapterListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
