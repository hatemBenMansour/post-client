/// <reference path="../../typings/index.d.ts"/>

import {Component} from '@angular/core';
import {TestBed, async} from '@angular/core/testing';
import {MainComponent} from './main';

class MockTechsComponent {}
@Component({selector: 'iyed-app-footer', template: ''})
class MockFooterComponent {}
@Component({selector: 'iyed-app-header', template: ''})
class MockHeaderComponent {}

describe('Main Component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MainComponent,
        MockTechsComponent,
        MockFooterComponent,
        MockHeaderComponent,
      ]
    });
    TestBed.compileComponents();
  }));

  it('should render the header, title, techs and footer', () => {
    const fixture = TestBed.createComponent(MainComponent);
    fixture.detectChanges();
    const main = fixture.nativeElement;
    expect(main.querySelector('iyed-app-header')).toBeDefined();
    expect(main.querySelector('iyed-app-footer')).toBeDefined();
  });
});
