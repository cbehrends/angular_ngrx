import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {ServiceType} from './servicetype';

@Injectable({
  providedIn: 'root'
})
export class ServiceTypesService {

  private ApiURL: string = 'http://localhost:5000/services';
  constructor(private httpClient: HttpClient) {}

  getServiceTypes(): Observable<ServiceType[]> {
    return this.httpClient.get<ServiceType[]>(this.ApiURL);
  }
}
