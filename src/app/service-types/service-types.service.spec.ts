import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { ServiceTypesService } from './service-types.service';
import {ServiceType} from "./store/service-type";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";

const fakeServices = [
  {id: 1, description: 'Test'} as ServiceType,
  {id: 2, description: 'Test 2'} as ServiceType
];

const testUrl = 'http://localhost:5000/services';

const errorResp = new HttpErrorResponse({status: 500, statusText: 'BOOM', url: testUrl});

describe('Service Types Service', () => {
  let service: ServiceTypesService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ServiceTypesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should fetch services', () => {

    service.getServiceTypes().subscribe(services => {
      expect(services.length).toBe(2);
      expect(services).toEqual(fakeServices);
    });

    service.getServiceTypes();
    const req = httpMock.expectOne(testUrl);
    expect(req.request.method).toEqual('GET');

    req.flush(fakeServices);
  });

  it('should handle error when fetching services', () => {

    service.getServiceTypes()
      .subscribe(
        () => fail(errorResp),
        (error: Error) => {
          expect(error.message).toBe('Http failure response for http://localhost:5000/services: 500 BOOM')
        }
      );

    const req = httpMock.expectOne(testUrl);

    // Respond with mock error
    req.flush(errorResp, { status: errorResp.status, statusText: errorResp.statusText});
  });

  it('should add service', () => {

    const dummyService = new ServiceType('FOO', 500);

    service.addService('FOO', 500).subscribe(retVal => {
      expect(retVal).toBe(dummyService);
    });

    const req = httpMock.expectOne('http://localhost:5000/services');
    expect(req.request.method).toEqual('POST');

    req.flush(dummyService);
  });

  it('should handle errors when adding new service', () => {

    service.addService('FOO', 500).subscribe(
      () => fail(errorResp),
      (error: Error) => {
        expect(error.message).toBeTruthy();
      }
    );

    const req = httpMock.expectOne('http://localhost:5000/services');
    expect(req.request.method).toEqual('POST');

    req.flush(errorResp, { status: errorResp.status, statusText: errorResp.statusText});
  });

  it('should delete service', () => {

    service.deleteService(1).subscribe(retVal => {
      expect(retVal).toBeTruthy();
    });

    const req = httpMock.expectOne('http://localhost:5000/services/1');
    expect(req.request.method).toEqual('DELETE');

    req.flush(new HttpResponse({status: 200}));
  });

});
