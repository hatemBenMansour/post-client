import {Component, OnInit} from "@angular/core";
import {BuildingService} from "./building.service";


@Component({
  template: require('./building.html'),
  providers: [BuildingService]
})

export class BuildingComponent implements OnInit {

  public buildingElements;

  buildingService: BuildingService;

  constructor(buildingService: BuildingService) {
    this.buildingService = buildingService;

  }

  ngOnInit() {
    this.buildingService.getList().subscribe(result => this.buildingElements = result);
  }


}
