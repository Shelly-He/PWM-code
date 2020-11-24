import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGuestPage } from './add-guest.page';

describe('AddGuestPage', () => {
  let component: AddGuestPage;
  let fixture: ComponentFixture<AddGuestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGuestPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGuestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
