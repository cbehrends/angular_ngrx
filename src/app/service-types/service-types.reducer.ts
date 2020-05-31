import {Action, createReducer, on} from '@ngrx/store';
import {GetServiceTypesAction, GetServiceTypesSuccessAction, GetServiceTypesErrorAction} from './service-types.actions';
import {ServiceType} from "./servicetype";
import ServiceTypeState, {initializeState} from "./servicetypestate";

const initialState = initializeState();


const _serviceTypesReducer = createReducer(initialState,
  on(GetServiceTypesAction, state => state),
  on(GetServiceTypesSuccessAction, (state: ServiceTypeState, { payload }) => {
    return { ...state, ServiceTypes: payload, ServiceTypesError: null };
  }),
  on(GetServiceTypesErrorAction, (error: Error) => {
    // remove below line and use different telemetry logging
    console.error(error);
    return {}
    // return { ...state, ServiceTypeError: error };
  })
);

export function ServiceTypesReducer(state: ServiceTypeState | undefined, action: Action) {
  return _serviceTypesReducer(state, action);
}
