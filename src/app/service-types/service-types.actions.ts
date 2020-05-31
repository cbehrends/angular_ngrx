import {createAction, props, union} from '@ngrx/store';
import {ServiceType} from "./servicetype";

export const getServiceTypesAction = createAction(
  '[ServiceTypes Component] GetServiceTypes',
);

export const getServiceTypesSuccessAction = createAction(
  '[ServiceTypes Component] GetServiceTypes - Success',
      props<{ payload: ServiceType[] }>()
);

export const getServiceTypesErrorAction = createAction(
  '[ServiceTypes Component] GetServiceTypes - Error',
  props<{ payload: Error }>()
);


const allActions = union({
  getServiceTypesAction,
  getServiceTypesSuccessAction,
  getServiceTypesErrorAction
})

export type AllServiceTypeActions = typeof allActions;
