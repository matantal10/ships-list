import {AfterViewInit, Component, OnInit} from '@angular/core';
import {CommonService} from "../../../services/common.service";
import {ShipIfc} from "../../../interfaces/shipIfc";

@Component({
  selector: 'app-ship-details',
  templateUrl: './ship-details.component.html',
  styleUrls: ['./ship-details.component.scss']
})
export class ShipDetailsComponent implements OnInit, AfterViewInit {
  public details: ShipIfc | undefined;

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.commonService.shipDetails$.subscribe((details: ShipIfc) => {
      this.details = details;
    })
  }



}
