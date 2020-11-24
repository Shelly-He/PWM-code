import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Act2Page } from './act2.page';

describe('Act2Page', () => {
  let component: Act2Page;
  let fixture: ComponentFixture<Act2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Act2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Act2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
