import {createAction, props} from '@ngrx/store';
import {ServiceType} from "./servicetype";

export const getServiceTypesAction = createAction(
  '[ServiceTypes Component] GetServiceTypes',
);

export const getServiceTypesSuccessAction = createAction(
  '[ServiceTypes Component] GetServiceTypes Success',
      props<{ payload: ServiceType[] }>()
);

export const getServiceTypesErrorAction = createAction('[ToDo] - Error', props<Error>());

// export const decrement = createAction('[ServiceTypes Component] Decrement');
// export const reset = createAction('[ServiceTypes Component] Reset');
