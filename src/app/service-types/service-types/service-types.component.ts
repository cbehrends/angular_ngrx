import {Component, OnInit} from '@angular/core';
import {ServiceTypesActions} from "../store/service-types.actions";
import {ServiceTypesSelectors} from "../store/service-types-selectors";

@Component({
  selector: 'app-service-types',
  templateUrl: './service-types.component.html',
  styleUrls: ['./service-types.component.css']
})
export class ServiceTypesComponent implements OnInit {

  serviceTypeList$ = this.selectors.getServiceTypes();

  constructor(private actions: ServiceTypesActions, private selectors: ServiceTypesSelectors) {}

  ngOnInit() {
    this.getServices();
  }

  public getServices() {
    this.actions.serviceTypesList();
  }

  public deleteService(id: number){
    this.actions.delete(id);
  }
}
