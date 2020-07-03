import { Store } from '@ngrx/store';
import {ServiceTypesActions} from './service-types.actions';
import ServiceTypeState from "./service-type-state";

describe('ServiceTypes actions', () => {
  describe('serviceTypesList', () => {
    it('should dispatch GetServiceTypes action', () => {
      const expectedAction = { type: '[ServiceTypes Component] GetServiceTypes' };

      const store = jasmine.createSpyObj<Store<ServiceTypeState>>('store', ['dispatch']);
      const actions = new ServiceTypesActions(store);
      actions.serviceTypesList();
      expect(store.dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });

  describe('Delete Service Type', () => {
    it('should dispatch DeleteServiceTypesAction', () => {
      const expectedAction = { id: 1, type: '[ServiceTypes Component] DeleteServiceType' };

      const store = jasmine.createSpyObj<Store<ServiceTypeState>>('store', ['dispatch']);
      const actions = new ServiceTypesActions(store);
      actions.delete(1);
      expect(store.dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });

});
