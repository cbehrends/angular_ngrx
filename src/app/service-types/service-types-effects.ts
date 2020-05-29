import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import {ServiceTypesService} from "./service-types.service";
import {getServiceTypesAction, getServiceTypesSuccessAction, getServiceTypesErrorAction} from "./service-types.actions";
import {ServiceType} from "./servicetype";

@Injectable()
export class ServiceTypesEffects {
  constructor(private serviceTypesService: ServiceTypesService, private action$: Actions) {}

  GetToDos$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(getServiceTypesAction),
      mergeMap(action =>
        this.serviceTypesService.getServiceTypes().pipe(
          map((data: ServiceType[]) => {
            return getServiceTypesSuccessAction({ payload: data });
          }),
          catchError((error: Error) => {
            return of(getServiceTypesErrorAction(error));
          })
        )
      )
    )
  );
}
