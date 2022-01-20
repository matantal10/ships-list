import {Component, OnDestroy, OnInit} from '@angular/core';
import {CommonService} from "../../../services/common.service";
import {ShipIfc} from "../../../interfaces/shipIfc";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-ship-details',
  templateUrl: './ship-details.component.html',
  styleUrls: ['./ship-details.component.scss']
})
export class ShipDetailsComponent implements OnInit, OnDestroy {
  public details: ShipIfc | undefined;
  private readonly destroy$ = new Subject();

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.commonService.shipDetails$.pipe(takeUntil(this.destroy$)).
    subscribe((details: ShipIfc) => {
      this.details = details;
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }


}
