import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action, Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { cold, hot } from 'jasmine-marbles';
import { Observable, of, throwError } from 'rxjs';
import * as serviceTypeActions from '../service-types.actions';
import { ServiceTypesEffects } from '../service-types-effects';
import { ServiceTypesService } from '../service-types.service';
import ServiceTypeState, { initializeState } from '../servicetypestate';

import { ServiceTypesComponent } from './service-types.component';

describe('ServiceTypesComponent', () => {
  let component: ServiceTypesComponent;
  let fixture: ComponentFixture<ServiceTypesComponent>;
  let serviceTypesServiceSpy: any;
  const initialState = { serviceTypeState: initializeState() };
  let store: MockStore<{ serviceTypeState: ServiceTypeState }>;
  let actions$: Observable<Action>;


  beforeEach(async(() => {
    serviceTypesServiceSpy = jasmine.createSpyObj('ServiceTypesService', ['getServiceTypes']);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule],
      declarations: [ ServiceTypesComponent ],
      providers: [
        ServiceTypesEffects,
        provideMockStore({ initialState }),
        provideMockActions(() => actions$),
        { provide: ServiceTypesService, useValue: serviceTypesServiceSpy },
      ]
    })
      .compileComponents()
      .then(() => {
        store = TestBed.inject<MockStore<{ serviceTypeState: ServiceTypeState }>>(MockStore);
      });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });

  it('Get ServiceTypes Effects - loads data from API', () => {

    let nextState: ServiceTypeState = {
      ServiceTypes: [{ id: 1, description: 'FOO',cost: 500}],
      ServiceTypeError: null
    };

    store.setState({ serviceTypeState: nextState });

    const source = hot('a', { a: serviceTypeActions.getServiceTypesAction });
    const actions = new Actions(source);
    const payload = [{ Title: 'second', IsCompleted: true }];
    serviceTypesServiceSpy.getServiceTypes.and.returnValue(of(payload));

    const effects = new ServiceTypesEffects(serviceTypesServiceSpy, actions);
    const expected = cold('b', {
      b: { type: serviceTypeActions.getServiceTypesSuccessAction.type, payload }
    });

    expect(effects.getServiceTypes).toBeObservable(expected);
  });

});
