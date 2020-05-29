import {Action, createReducer, on} from '@ngrx/store';
import {getServiceTypes, getServiceTypesSuccess} from './service-types.actions';
import {ServiceType} from "./servicetype";
import ServiceTypeState, {initializeState} from "./servicetypestate";

const initialState = initializeState();


const _serviceTypesReducer = createReducer(initialState,
  on(getServiceTypes, state => state),
  on(getServiceTypesSuccess, (state: ServiceTypeState, { payload }) => {
    return { ...state, ServiceTypes: payload, ServiceTypesError: null };
  }),
);

export function serviceTypesReducer(state: ServiceTypeState | undefined, action: Action) {
  return _serviceTypesReducer(state, action);
}
