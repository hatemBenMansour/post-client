import {Component, OnInit,OnDestroy} from "@angular/core";
import {BuildingService} from "../building.service";
import {BuildingModel} from "../building.model";
import { Observable } from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router';


@Component({
  templateUrl: 'app/building/details/building-details.html',
  providers: [BuildingService]
})

export class BuildingDetailsComponent implements OnInit,OnDestroy {

  private sub:any;
  private id;
  public buildingContent: BuildingModel;
  private isDataAvailable =false;

  constructor(private buildingService: BuildingService,private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.buildingService.get(this.id).subscribe(result => this.buildingContent = result);
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }


}
