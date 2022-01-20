import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {ShipIfc} from "../interfaces/shipIfc";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getShipList(): Observable<ShipIfc[]> {
    return this.http.get('./assets/mock-data.json')
      .pipe(map( (res: any) => res.records.map((record: { ship: ShipIfc; }) => {
        return <ShipIfc> {
          country: record?.ship?.country,
          important: false, //initial value - server doesn't include property.
          width: record?.ship?.width,
          callsign: record?.ship?.callsign,
        }
      })));
      // map((record: { ship: ShipIfc; }) => record.ship)));
  }
}

