/// <reference path="../../typings/index.d.ts"/>

import {Component} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main';
import {BuildingListComponent} from './building/list/building-list';
import {BuildingDetailsComponent} from './building/details/building-details';
import {WeatherComponent} from './weather/weather';
import {PrayComponent} from './pray/pray';
import {ReminderComponent} from './reminder/reminder';

@Component({
  selector: 'iyed-app-root',
  template: '<iyed-app-header></iyed-app-header>' +
  '<router-outlet></router-outlet>'+
    '<iyed-app-footer></iyed-app-footer>'
})
export class RootComponent {}

export const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'building',
    component: BuildingListComponent
  },
  { path: 'building/:id',
    component: BuildingDetailsComponent
  },
  {
    path: 'weather',
    component: WeatherComponent
  },
  {
    path: 'pray',
    component: PrayComponent
  },
  {
    path: 'reminder',
    component: ReminderComponent
  }

];

export const routing = RouterModule.forRoot(routes);
