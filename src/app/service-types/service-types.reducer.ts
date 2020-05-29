import {Action, createReducer, on} from '@ngrx/store';
import {getServiceTypesAction, getServiceTypesSuccessAction, getServiceTypesErrorAction} from './service-types.actions';
import {ServiceType} from "./servicetype";
import ServiceTypeState, {initializeState} from "./servicetypestate";

const initialState = initializeState();


const _serviceTypesReducer = createReducer(initialState,
  on(getServiceTypesAction, state => state),
  on(getServiceTypesSuccessAction, (state: ServiceTypeState, { payload }) => {
    return { ...state, ServiceTypes: payload, ServiceTypesError: null };
  }),
  on(getServiceTypesErrorAction, (state: ServiceTypeState, error: Error) => {
    // remove below line and use different telemetry logging
    console.error(error);
    return { ...state, ToDoError: error };
  })
);

export function ServiceTypesReducer(state: ServiceTypeState | undefined, action: Action) {
  return _serviceTypesReducer(state, action);
}
