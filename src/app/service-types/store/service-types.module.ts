import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { ServiceTypesReducer } from "./service-types.reducer";
import { ServiceTypesEffects } from "./service-types-effects";
import { ServiceTypesSelectors } from "./service-types-selectors";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('ServiceTypes', ServiceTypesReducer),
    EffectsModule.forFeature([ServiceTypesEffects])
  ],
  providers: [ServiceTypesSelectors]
})
export class ServiceTypesModule { }
