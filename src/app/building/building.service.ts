import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import {BuildingModel} from './building.model';
import {Injectable} from "@angular/core";

@Injectable()
export class BuildingService {
  public http: Http;

  constructor(http : Http) {
    this.http = http;
  }

  getList(): Observable<BuildingModel[]> {
    return this.http
      .get('app/building/building.menu.elements.json')
      .map(response => response.json());
  }


}
