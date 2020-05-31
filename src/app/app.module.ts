import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RoutingModule } from './routing/routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ServiceTypesComponent } from './service-types/service-types/service-types.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import {ServiceTypesEffects} from './service-types/service-types-effects';
import { ServiceTypesReducer } from './service-types/service-types.reducer';
@NgModule({

  declarations: [
    AppComponent,
    ServiceTypesComponent,
    LayoutComponent,
    HeaderComponent,
    SidenavListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule,
    BrowserAnimationsModule,
    MaterialModule,
    StoreModule.forRoot({ serviceTypesReducer: ServiceTypesReducer }),
    EffectsModule.forRoot([ServiceTypesEffects, ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
