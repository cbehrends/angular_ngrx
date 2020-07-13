import {
  DeleteServiceTypeErrorAction,
  GetServiceTypesAction,
  GetServiceTypesErrorAction,
  GetServiceTypesSuccessAction
} from "./service-types.actions";
import {ServiceTypesReducer} from "./service-types.reducer";
import {Action} from "@ngrx/store";
import {initializeState} from "./service-type-state";
import {ServiceType} from "./service-type";

describe('Service Types reducer', () => {
  it('should return default state', () => {
    const newState = ServiceTypesReducer(undefined, {} as Action);
    const initialState = initializeState();
    expect(newState).toEqual(initialState);
  });

  it('should handle get service types action and return current state', () => {
    const action =  GetServiceTypesAction();
    const initialState = initializeState();
    const newState = ServiceTypesReducer(initialState, action);

    expect(newState).toEqual(initialState);
  });

  it('should handle get service types success action and return mutated state', () => {
    const initialState = initializeState();
    const expectedState = {...initialState, ServiceTypes: [{id: 1, cost: 200, description: 'foo'} as ServiceType]};

    const action =  GetServiceTypesSuccessAction({payload: expectedState.ServiceTypes});
    const newState = ServiceTypesReducer(initialState, action);

    expect(newState).toEqual(expectedState);
  });

  it('should handle get service types error action and return error state', () => {
    const initialState = initializeState();
    const expectedState = {...initialState, ServiceTypeError: new Error('BOOM')};

    const action =  GetServiceTypesErrorAction({error: expectedState.ServiceTypeError});
    const newState = ServiceTypesReducer(initialState, action);

    expect(newState).toEqual(expectedState);
  });

  it('should handle delete service type error action and return error state', () => {
    const initialState = initializeState();
    const expectedState = {...initialState, ServiceTypeError: new Error('BOOM')};

    const action =  DeleteServiceTypeErrorAction({error: expectedState.ServiceTypeError});
    const newState = ServiceTypesReducer(initialState, action);

    expect(newState).toEqual(expectedState);
  });

});
