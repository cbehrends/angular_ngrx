import { Component, OnInit } from '@angular/core';
import {ServiceTypesService} from "../service-types.service";
import {ServiceType} from "../store/service-type";

@Component({
  selector: 'app-service-types-service-direct',
  templateUrl: './service-types-service-direct.component.html',
  styleUrls: ['./service-types-service-direct.component.css']
})
export class ServiceTypesServiceDirectComponent implements OnInit {
  public ServiceTypes: ServiceType[];
  constructor(private serviceTypesSvc: ServiceTypesService) { }

  ngOnInit(): void {
    this.getServices();
  }

  public getServices() {
    this.serviceTypesSvc.getServiceTypes()
      .subscribe(
        services => this.ServiceTypes = services
      );
  }

  public deleteService(id: number){
    this.serviceTypesSvc.deleteService(id);
  }
}
