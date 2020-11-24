import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaGamePage } from './ca-game.page';

describe('CaGamePage', () => {
  let component: CaGamePage;
  let fixture: ComponentFixture<CaGamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaGamePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaGamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
