import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {ShipIfc} from "../interfaces/shipIfc";

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  shipDetails$: Subject<ShipIfc> = new Subject();
}
