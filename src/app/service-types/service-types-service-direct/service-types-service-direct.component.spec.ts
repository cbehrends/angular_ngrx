import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ServiceTypesServiceDirectComponent } from './service-types-service-direct.component';
import {ServiceType} from "../store/service-type";
import {Observable, of} from "rxjs";
import {HttpResponse} from "@angular/common/http";
import {ServiceTypesService} from "../service-types.service";

describe('ServiceTypesServiceDirectComponent', () => {
  let systemUnderTest: ServiceTypesServiceDirectComponent;
  let fixture: ComponentFixture<ServiceTypesServiceDirectComponent>;

  const testVal = {id: 1, description: 'Foo', cost: 100.00} as ServiceType;
  const serviceTypes = of([testVal]);
  const testSuccessResponse  = new Observable<HttpResponse<any>>();
  const serviceTypesServiceSpy = jasmine.createSpyObj('ServicesTypesService', ['getServiceTypes', 'addService', 'deleteService']);

  beforeEach(async(() => {

    serviceTypesServiceSpy.getServiceTypes.and.returnValue(serviceTypes);
    serviceTypesServiceSpy.addService.and.returnValue(testVal);
    serviceTypesServiceSpy.deleteService.and.returnValue(testSuccessResponse);

    TestBed.configureTestingModule({
      providers: [ { provide: ServiceTypesService, useValue: serviceTypesServiceSpy }],
      declarations: [ ServiceTypesServiceDirectComponent ]
    })
    .compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceTypesServiceDirectComponent);
    systemUnderTest = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call ServicesTypesService.getServices on init', async () => {
    await systemUnderTest.ngOnInit();
    expect(serviceTypesServiceSpy.getServiceTypes).toHaveBeenCalled();
  });

  it('should call ServicesTypesService.deleteService', async () => {
    systemUnderTest.ServiceTypes = new Array({id: 1, description: 'FOOO'} as ServiceType);
    systemUnderTest.deleteService(1);
        expect(serviceTypesServiceSpy.deleteService).toHaveBeenCalledWith(1);
  });
});
