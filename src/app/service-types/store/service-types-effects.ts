import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import {ServiceTypesService} from "../service-types.service";
import {
  GetServiceTypesAction,
  GetServiceTypesSuccessAction,
  GetServiceTypesErrorAction,
  AllServiceTypeActions,
  DeleteServiceTypeAction, DeleteServiceTypeSuccessAction, DeleteServiceTypeErrorAction
} from "./service-types.actions";
import {ServiceType} from "./service-type";

@Injectable()
export class ServiceTypesEffects {
  constructor(private serviceTypesService: ServiceTypesService, private action$: Actions) {}

  getServiceTypes: Observable<AllServiceTypeActions> = createEffect(() =>
    this.action$.pipe(
      ofType(GetServiceTypesAction),
      mergeMap(action =>
        this.serviceTypesService.getServiceTypes()
          .pipe(
            map((data: ServiceType[]) => {
              return GetServiceTypesSuccessAction({ payload: data });
            }),
            catchError((error: Error) => {
              return of(GetServiceTypesErrorAction({error: error}));
            })
        )
      )
    )
  );

  deleteServiceType: Observable<AllServiceTypeActions> = createEffect(() =>
    this.action$.pipe(
      ofType(DeleteServiceTypeAction),
      mergeMap(action =>
        this.serviceTypesService.deleteService(action.id)
          .pipe(
            map(() => {
              return DeleteServiceTypeSuccessAction();
            }),
            catchError((error: Error) => {
              return of(DeleteServiceTypeErrorAction({error: error}));
            })
          )
      )
    )
  );
}
