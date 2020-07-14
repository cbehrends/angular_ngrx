import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ServiceTypesComponent } from '../service-types/service-types/service-types.component';
import {HomeComponent} from "../home/home.component";
import {ServiceTypesServiceDirectComponent} from "../service-types/service-types-service-direct/service-types-service-direct.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent},
  // { path: 'claims', pathMatch: 'full', component: ClaimsComponent},
  // { path: 'services', pathMatch: 'full', component: ServiceTypesComponent},
  { path: 'services', pathMatch: 'full', component: ServiceTypesServiceDirectComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
