import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { ServiceTypesService } from './service-types.service';
import {ServiceType} from "./servicetype";
import {HttpErrorResponse} from "@angular/common/http";

const fakeServices = [
  {id: 1, description: 'Test'} as ServiceType,
  {id: 2, description: 'Test 2'} as ServiceType
];

const testUrl = 'http://localhost:5000/services';

const errorResp = new HttpErrorResponse({status: 500, statusText: 'BOOM', url: testUrl});

describe('ServiceTypesService', () => {
  let service: ServiceTypesService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceTypesService],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ServiceTypesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
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

});
