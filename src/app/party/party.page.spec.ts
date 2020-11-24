import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyPage } from './party.page';

describe('PartyPage', () => {
  let component: PartyPage;
  let fixture: ComponentFixture<PartyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
