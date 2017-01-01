import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import {DashboardModel} from './dashboard.model';
import {Injectable} from "@angular/core";

@Injectable()
export class DashboardService {
  public http: Http;

 constructor(http : Http) {
   this.http = http;
  }

  getList(): Observable<DashboardModel[]> {
   return this.http
      .get('app/dashboard/dashboard.menu.elements.json')
      .map(response => response.json());
  }


}
