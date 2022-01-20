import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {HttpService} from "../../services/http.service";
import {Observable} from "rxjs";
import {ShipIfc} from "../../interfaces/shipIfc";

@Component({
  selector: 'app-ships-data-container',
  templateUrl: './ships-data-container.component.html',
  styleUrls: ['./ships-data-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShipsDataContainerComponent implements OnInit {

  public shipList$: Observable<ShipIfc[]> = new Observable<ShipIfc[]>();

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.shipList$ = this.http.getShipList();
  }

}
