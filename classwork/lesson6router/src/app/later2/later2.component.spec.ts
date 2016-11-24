/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Later2Component } from './later2.component';

describe('Later2Component', () => {
  let component: Later2Component;
  let fixture: ComponentFixture<Later2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Later2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Later2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
