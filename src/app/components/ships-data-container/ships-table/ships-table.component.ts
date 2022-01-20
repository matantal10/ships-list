import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {ShipIfc} from "../../../interfaces/shipIfc";
import {CommonService} from "../../../services/common.service";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-ships-table',
  templateUrl: './ships-table.component.html',
  styleUrls: ['./ships-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShipsTableComponent implements OnInit {

  @Input() dataSource: any;
  columns = ['important','country','callsign','width'];
  public isNameAsc: boolean | undefined;

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
  }


  getShipDetails(entity: ShipIfc) {
    this.commonService.shipDetails$.next(entity);
  }

  sortTable(col: string) {
    if(col === 'country') {
      this.dataSource.pipe(map((data: ShipIfc[]) => data.sort(this.sortByName)));
    }
    this.isNameAsc = !this.isNameAsc
  }

  sortByName = (a: ShipIfc, b: ShipIfc) => {
    let nameA = '';
    let nameB = '';

    if(a.country && b.country) {
      nameA = a.country.toLocaleUpperCase();
      nameB = b.country.toLocaleUpperCase();
    }
    if(this.isNameAsc) {
      return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
    }else {
      return (nameA  > nameB) ? -1 : (nameA < nameB) ? 1 : 0;
    }
  }


  isImportant(entity: ShipIfc) {

  }
}
