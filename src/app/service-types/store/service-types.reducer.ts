import {Action, createReducer, on} from '@ngrx/store';
import {
  GetServiceTypesAction,
  GetServiceTypesSuccessAction,
  GetServiceTypesErrorAction,
  DeleteServiceTypeErrorAction
} from './service-types.actions';
import ServiceTypeState, {initializeState} from "./service-type-state";

const initialState = initializeState();


const _serviceTypesReducer = createReducer(initialState,
  on(GetServiceTypesAction, state => state),
  on(GetServiceTypesSuccessAction, (state: ServiceTypeState, { payload }) => {
    return { ...state, ServiceTypes: payload, ServiceTypeError: null };
  }),
  on(GetServiceTypesErrorAction, (state: ServiceTypeState, { error }) => {
    // remove below line and use different telemetry logging
    console.error(error);
    return { ...state, ServiceTypeError: error };
  }),
  on(DeleteServiceTypeErrorAction, (state: ServiceTypeState, {error}) => {
    return {...state, ServiceTypeError: error}
  })
);

export function ServiceTypesReducer(state: ServiceTypeState | undefined, action: Action) {
  return _serviceTypesReducer(state, action);
}
