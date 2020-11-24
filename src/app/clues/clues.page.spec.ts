import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CluesPage } from './clues.page';

describe('CluesPage', () => {
  let component: CluesPage;
  let fixture: ComponentFixture<CluesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CluesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CluesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
