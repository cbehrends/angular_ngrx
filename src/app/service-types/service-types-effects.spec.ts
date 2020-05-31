import {from, Observable, of} from 'rxjs';
import { Action } from '@ngrx/store';
import { TestBed, async } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { ServiceTypesEffects } from './service-types-effects';
import * as fromActions from './service-types.actions';
import {AllServiceTypeActions, GetServiceTypesAction, GetServiceTypesErrorAction} from './service-types.actions';
import { ServiceTypesService } from './service-types.service';
import {GetServiceTypesSuccessAction} from "./service-types.actions";
import {Actions, ofType} from "@ngrx/effects";
import {ServiceType} from "./servicetype";
import {cold, hot} from "jasmine-marbles";
import {map} from "rxjs/operators";


describe('ServiceTypesEffects', () => {
  let actions$: Actions<AllServiceTypeActions>;
  let actions: Observable<any>;
  let effects: ServiceTypesEffects;
  let dataService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        ServiceTypesEffects,
        provideMockStore(),
        provideMockActions(() => actions$),
        {
          provide: ServiceTypesService,
          useValue: jasmine.createSpyObj('ServiceTypesService', ['getServiceTypes'])
        }
      ],
    });
    effects = TestBed.inject(ServiceTypesEffects);
    dataService = TestBed.inject(ServiceTypesService)

  }));

  it('should dispatch GetServiceTypes Success action ', () => {

    const serviceTypeList: ServiceType[] = [{id: 1, description: 'FOo', cost: 100 }];
    const action = GetServiceTypesAction();
    const completion = GetServiceTypesSuccessAction({payload: serviceTypeList});

    actions$ = hot('-a', {a: action});
    const response = cold('-a|', {a: serviceTypeList});
    dataService.getServiceTypes.and.returnValue(response);
    const expected = cold('--b', { b: completion });

    expect(effects.getServiceTypes).toBeObservable(expected);

  });

  it('should dispatch GetServiceTypesErrorAction', () => {

    const action = GetServiceTypesAction();
    const error = new Error('BOOM');
    const completion = GetServiceTypesErrorAction({payload: error});

    actions$ = hot('-a|', {a: action});
    const response = cold('-#|', {}, error);

    dataService.getServiceTypes.and.returnValue(response);

    const expected = cold('--(b|)', {b: completion});

    expect(effects.getServiceTypes).toBeObservable(expected);

  });
});
