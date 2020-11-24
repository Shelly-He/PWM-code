import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparationsPage } from './preparations.page';

describe('PreparationsPage', () => {
  let component: PreparationsPage;
  let fixture: ComponentFixture<PreparationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreparationsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreparationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
