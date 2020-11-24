import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageViewPage } from './page-view.page';

describe('PageViewPage', () => {
  let component: PageViewPage;
  let fixture: ComponentFixture<PageViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageViewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
