import {Component, OnDestroy, OnInit} from '@angular/core';
import {ServiceType} from "../servicetype";
import {Observable, Subscription} from "rxjs";
import ServiceTypeState from "../servicetypestate";
import {select, Store} from "@ngrx/store";
import {map} from "rxjs/operators";
import {getServiceTypesAction} from "../service-types.actions";
import {ofType} from "@ngrx/effects";

@Component({
  selector: 'app-service-types',
  templateUrl: './service-types.component.html',
  styleUrls: ['./service-types.component.css']
})
export class ServiceTypesComponent implements OnInit, OnDestroy {

  serviceTypes$: Observable<ServiceTypeState>;
  serviceTypesSubscription: Subscription;
  serviceTypeList: ServiceType[] = [];
  serviceTypeError: Error = null;

  constructor(private store: Store<{ serviceTypesReducer: ServiceTypeState }>) {
    this.serviceTypes$ = store.pipe(select('serviceTypesReducer'));
  }

  ngOnInit() {
    this.serviceTypesSubscription = this.serviceTypes$
      .pipe(
        map(x => {
          this.serviceTypeList = x.ServiceTypes
        })
      )
      .subscribe();

    this.store.dispatch(getServiceTypesAction());
  }

  ngOnDestroy() {
    if (this.serviceTypesSubscription) {
      this.serviceTypesSubscription.unsubscribe();
    }
  }
}
