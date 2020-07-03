import { Injectable } from '@angular/core';
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import ServiceTypeState from './service-type-state';

export const getServiceTypeState = createFeatureSelector<ServiceTypeState>('ServiceTypes');

export const serviceTypesSelectorsFn = createSelector(
  getServiceTypeState,
  (state) => state.ServiceTypes
);

@Injectable({
  providedIn: 'root'
})
export class ServiceTypesSelectors {

  constructor(private store: Store<ServiceTypeState>) {}

  public getServiceTypes() {
    return this.store.select(serviceTypesSelectorsFn);
  }

}
