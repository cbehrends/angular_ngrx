import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ServiceTypesService } from '../service-types.service';
import { ServiceTypesComponent} from "./service-types.component";
import { ServiceTypesActions} from '../store/service-types.actions';
import {ServiceType} from "../store/service-type";
import { Store } from '@ngrx/store';
import {ServiceTypesSelectors} from "../store/service-types-selectors";
import {of} from "rxjs";
describe('Service Types Component', () => {
  let component: ServiceTypesComponent;
  let fixture: ComponentFixture<ServiceTypesComponent>;
  let actions: any;
  beforeEach(async(() => {
    const serviceType = new ServiceType('FOo', 500);
    const serviceTypesList = [serviceType, new ServiceType('Bar', 400)];
    actions = jasmine.createSpyObj('ServiceTypesActions', ['serviceTypesList', 'delete'])
    actions.serviceTypesList.and.returnValue(serviceTypesList);
    actions.delete.and.callThrough()
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
          useValue: actions
          // useValue: {
          //   serviceTypesList: () => {}
          // }
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

  it('should call ServicesTypesService.getServices on init', async () => {
    await component.ngOnInit();
    expect(actions.serviceTypesList).toHaveBeenCalled();
  });

  it('should call ServicesTypesService.deleteService on delete', async () => {
    await component.deleteService(1);
    expect(actions.delete).toHaveBeenCalled();
  });
});
