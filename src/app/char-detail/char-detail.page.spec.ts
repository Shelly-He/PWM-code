import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharDetailPage } from './char-detail.page';

describe('CharDetailPage', () => {
  let component: CharDetailPage;
  let fixture: ComponentFixture<CharDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
