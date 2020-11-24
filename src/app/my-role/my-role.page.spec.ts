import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRolePage } from './my-role.page';

describe('MyRolePage', () => {
  let component: MyRolePage;
  let fixture: ComponentFixture<MyRolePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyRolePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRolePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
