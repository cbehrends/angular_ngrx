import {ServiceType} from "./service-type";
import { Store } from '@ngrx/store';
import ServiceTypeState from './service-type-state';
import {getServiceTypeState, ServiceTypesSelectors, serviceTypesSelectorsFn} from './service-types-selectors'
import {ServiceTypesEffects} from "./service-types-effects";

describe('Service Types Selector', () => {
  describe('getServiceTypes', () => {
    it('should return the service types list', () => {
      const serviceTypes = [new ServiceType('Foo', 500)];

      const serviceTypesState = {
        ServiceTypes: serviceTypes,
        ServiceTypeError: undefined
      } as ServiceTypeState;

      expect(serviceTypesSelectorsFn.projector(serviceTypesState)).toEqual(serviceTypes);
    });

    it('should return call the serviceTypesSelectorsFn', () => {
      const store = jasmine.createSpyObj<Store<ServiceTypeState>>('store', ['select']);

      const serviceTypesSelectors = new ServiceTypesSelectors(store);
      serviceTypesSelectors.getServiceTypes();

      // expect(store.select).toHaveBeenCalledWith(serviceTypesSelectorsFn);
    });
  });
});
