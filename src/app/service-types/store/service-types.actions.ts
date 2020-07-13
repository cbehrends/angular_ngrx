import {createAction, props, Store, union} from '@ngrx/store';
import {ServiceType} from "./service-type";
import ServiceTypeState from "./service-type-state";
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
  props<{ error: Error }>()
);

export const DeleteServiceTypeAction = createAction(
  '[ServiceTypes Component] DeleteServiceType',
  props<{id: number}>()
);

export const DeleteServiceTypeSuccessAction = createAction(
  '[ServiceTypes Component] DeleteServiceType - Success'
);

export const DeleteServiceTypeErrorAction = createAction(
  '[ServiceTypes Component] DeleteServiceType - Error',
  props<{ error: Error }>()
);

@Injectable({ providedIn: 'root' })
export class ServiceTypesActions {
  constructor(private store: Store<ServiceTypeState>) {}

  public serviceTypesList(): void {
    this.store.dispatch(GetServiceTypesAction());
  }

  public delete(id: number): void {
    this.store.dispatch(DeleteServiceTypeAction({id: id}))
  }

}

const allActions = union({
  GetServiceTypesAction: GetServiceTypesAction,
  GetServiceTypesSuccessAction: GetServiceTypesSuccessAction,
  SetServiceTypesErrorAction: GetServiceTypesErrorAction,
  DeleteServiceTypeAction: DeleteServiceTypeAction,
  DeleteServiceTypesSuccessAction: DeleteServiceTypeSuccessAction,
  DeleteServiceTypesErrorAction: DeleteServiceTypeErrorAction
})

export type AllServiceTypeActions = typeof allActions;
