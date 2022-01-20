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
    return this.http.get('https://run.mocky.io/v3/b22be45d-298d-41a0-831e-28010707b210')
      .pipe(map( (res: any) => res.records.map((record: { ship: ShipIfc; }) => record.ship)));
  }
}
