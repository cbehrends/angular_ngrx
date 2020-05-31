import {createAction, props, Store, union} from '@ngrx/store';
import {ServiceType} from "./servicetype";
import ServiceTypeState from "./servicetypestate";
import {Injectable} from "@angular/core";

export const GetServiceTypesAction = createAction(
  '[ServiceTypes Component] GetServiceTypes',
);

export const GetServiceTypesSuccessAction = createAction(
  '[ServiceTypes Component] GetServiceTypes - Success',
      props<{ payload: ServiceType[] }>()
);

export const GetServiceTypesErrorAction = createAction(
  '[ServiceTypes Component] GetServiceTypes - Error',
  props<{ payload: Error }>()
);


@Injectable({ providedIn: 'root' })
export class ServiceTypesActions {
  constructor(private store: Store<ServiceTypeState>) {}

  public serviceTypesList(): void {
    this.store.dispatch(GetServiceTypesAction());
  }

}

const allActions = union({
  GetServiceTypesAction: GetServiceTypesAction,
  GetServiceTypesSuccessAction: GetServiceTypesSuccessAction,
  SetServiceTypesErrorAction: GetServiceTypesErrorAction
})

export type AllServiceTypeActions = typeof allActions;
