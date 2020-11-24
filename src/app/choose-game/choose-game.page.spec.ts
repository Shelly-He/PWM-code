import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseGamePage } from './choose-game.page';

describe('ChooseGamePage', () => {
  let component: ChooseGamePage;
  let fixture: ComponentFixture<ChooseGamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseGamePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseGamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
