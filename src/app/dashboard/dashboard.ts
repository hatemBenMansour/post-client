import {Component, OnInit} from "@angular/core";
import {DashboardService} from "./dashboard.service";


@Component({
  selector: 'iyed-app-menu',
  template: require('./dashboard.html'),
  providers: [DashboardService]
})

export class DashboardComponent implements OnInit {

  public dashboardElements;
  dashboardService :DashboardService;

  constructor(dashboardService: DashboardService) {
    this.dashboardService = dashboardService;

  }

  ngOnInit() {
    this.dashboardService.getList().subscribe(result => this.dashboardElements = result);
  }


}
