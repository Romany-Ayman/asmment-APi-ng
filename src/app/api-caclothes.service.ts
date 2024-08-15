import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCaclothesService {

  constructor(private _HttpClient:HttpClient) { };


  gatApi():Observable<any>
  {
   return  this._HttpClient.get('https://fakestoreapi.com/products')
  }
}
