import { Store } from '@ngrx/store';
import {GetServiceTypesAction, ServiceTypesActions} from './service-types.actions';
import ServiceTypeState from "./servicetypestate";

describe('Todo list actions', () => {
  describe('loadTodoList', () => {
    it('should dispatch load todolist action', () => {
      const expectedAction = { type: '[ServiceTypes Component] GetServiceTypes' };

      const store = jasmine.createSpyObj<Store<ServiceTypeState>>('store', ['dispatch']);
      const actions = new ServiceTypesActions(store);
      actions.serviceTypesList();
      expect(store.dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});
