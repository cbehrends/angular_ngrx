import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {ServiceType} from './servicetype';

@Injectable({
  providedIn: 'root'
})
export class ServiceTypesService {

  private _apiUrl: string = 'http://localhost:5000/services';
  constructor(private httpClient: HttpClient) {}

  getServiceTypes(): Observable<ServiceType[]> {
    return this.httpClient.get<ServiceType[]>(this._apiUrl);
  }

  addService(description: string, cost: number): any{
    return this.httpClient.post(this._apiUrl, {description, cost});
  }
}
