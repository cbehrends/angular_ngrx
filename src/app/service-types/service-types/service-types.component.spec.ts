import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ServiceTypesService } from '../service-types.service';
import { ServiceTypesComponent} from "./service-types.component";
import { ServiceTypesActions} from '../service-types.actions';
import {ServiceType} from "../servicetype";
import { Store } from '@ngrx/store';
import {ServiceTypesSelectors} from "../service-types-selectors";
import {of} from "rxjs";
describe('ServiceTypesComponent', () => {
  let component: ServiceTypesComponent;
  let fixture: ComponentFixture<ServiceTypesComponent>;

  beforeEach(async(() => {
    const serviceType = new ServiceType('FOo', 500);
    const serviceTypesList = [serviceType, new ServiceType('Bar', 400)];

    TestBed.configureTestingModule({
      declarations: [ServiceTypesComponent],
      imports: [],
      providers: [
        {
          provide: ServiceTypesService,
          useValue: { serviceTypesList: serviceTypesList }
        },
        {
          provide: ServiceTypesActions,
          useValue: {
            serviceTypesList: () => {}
          }
        },
        {
          provide: ServiceTypesSelectors,
          useValue: {
            getServiceTypes: () => of([])
          }
        }
      ]
    })
      .overrideTemplate(ServiceTypesComponent, '')
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
