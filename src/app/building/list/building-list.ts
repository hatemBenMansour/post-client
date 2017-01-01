import {Component, OnInit} from "@angular/core";
import {BuildingService} from "../building.service";
import {BuildingModel} from "../building.model";


@Component({
  template: require('./building-list.html'),
  providers: [BuildingService]
})

export class BuildingListComponent implements OnInit {

  public buildingElements:BuildingModel[];

  buildingService: BuildingService;

  constructor(buildingService: BuildingService) {
    this.buildingService = buildingService;

  }

  ngOnInit() {
    this.buildingService.getList().subscribe(result => this.buildingElements = result);
  }


}
