import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { DataCard } from "../models/datacard";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  configUrl: string = '/assets/db.json';
  constructor(private http: HttpClient) { }

  getAllProductCard(): Observable<DataCard> {
    return this.http.get<DataCard>(this.configUrl)
  }

}
