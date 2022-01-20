import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {ShipIfc} from "../../../interfaces/shipIfc";
import {CommonService} from "../../../services/common.service";
import {Observable} from "rxjs";


type ICol = keyof ShipIfc;

@Component({
  selector: 'app-ships-table',
  templateUrl: './ships-table.component.html',
  styleUrls: ['./ships-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ShipsTableComponent implements OnInit {

  @Input() dataSource: Observable<ShipIfc[]> | undefined;
  public columns:ICol[] = ['important','country','callsign','width'];
  public isNameAsc: boolean | undefined;

  constructor(private commonService: CommonService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
  }


  getShipDetails(entity: ShipIfc) {
    this.commonService.shipDetails$.next(entity);
  }

  sortTable(col: string,  data: ShipIfc[]) {
    if(col === 'country') {
    const sorted = data.sort(this.sortByName);
    this.cdr.detectChanges()
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


  isImportant(entity: ShipIfc, data: ShipIfc[]) {
        const selected = data.find(value => value.id === entity.id);
        if(selected) {
          selected.important = !selected.important;
        }
    }



}
