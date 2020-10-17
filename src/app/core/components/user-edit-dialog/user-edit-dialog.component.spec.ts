import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';

import { UserEditDialogComponent } from './user-edit-dialog.component';

describe('UserEditDialogComponent', () => {
  let component: UserEditDialogComponent;
  let fixture: ComponentFixture<UserEditDialogComponent>;
  const dialogMock = {
    close: () => {}
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, MatDialogModule, ReactiveFormsModule],
      declarations: [UserEditDialogComponent],
      providers: [{ provide: MatDialogRef, useValue: dialogMock },
      { provide: MAT_DIALOG_DATA, useValue: {} }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call send data for close dialog', () => {
    const SPY = spyOn(component.dialogRef, 'close').and.callThrough();
    component.sendUser();
    expect(SPY).toHaveBeenCalled();
  });

  it('should call senddata', () => {
    spyOn(component, 'sendUser').and.callThrough();
    component.sendUser();
    fixture.detectChanges();
    expect(component.sendUser).toHaveBeenCalled();
  });

  it('should call setUserData', () => {
    spyOn(component, 'setUserData').and.callThrough();
    component.setUserData();
    fixture.detectChanges();
    expect(component.setUserData).toHaveBeenCalled();
  });

  it('should call cerateUserForm', () => {
    spyOn(component, 'cerateUserForm').and.callThrough();
    component.cerateUserForm();
    fixture.detectChanges();
    expect(component.cerateUserForm).toHaveBeenCalled();
  });

  it('should call removeHobby', () => {
    spyOn(component, 'removeHobby').and.callThrough();
    component.removeHobby('singing');
    fixture.detectChanges();
    expect(component.removeHobby).toHaveBeenCalled();
  });
});
