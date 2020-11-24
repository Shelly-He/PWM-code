import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Act1Page } from './act1.page';

describe('Act1Page', () => {
  let component: Act1Page;
  let fixture: ComponentFixture<Act1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Act1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Act1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
