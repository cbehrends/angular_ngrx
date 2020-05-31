import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {ConfirmDialogComponent, ConfirmDialogModel} from './confirm-dialog.component';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {Observable} from "rxjs";

class mockDialogClose {
  public close(value: any){

  }
}

describe('ConfirmDialogComponent', () => {
  let component: ConfirmDialogComponent;
  let fixture: ComponentFixture<ConfirmDialogComponent>;
  const spy = jasmine.createSpyObj('MatDialogRef', ['close', 'confirm']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatDialogModule],
      providers: [
        {provide: MatDialogRef, useValue: spy},
        {provide: MAT_DIALOG_DATA, useValue: new ConfirmDialogModel('foo', 'bar')},
      ],
      declarations: [ ConfirmDialogComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close dialog ', () => {

    component.onDismiss();
    expect(spy.close).toHaveBeenCalledWith(false);
  });

  it('should confirm dialog ', () => {

    component.onConfirm();
    expect(spy.close).toHaveBeenCalledWith(true);
  });

});
