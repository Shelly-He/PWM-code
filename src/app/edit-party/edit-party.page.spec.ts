import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPartyPage } from './edit-party.page';

describe('EditPartyPage', () => {
  let component: EditPartyPage;
  let fixture: ComponentFixture<EditPartyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPartyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPartyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
