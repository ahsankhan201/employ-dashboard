import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserMockService } from '../../core/mocks/user-mock.service';
import { AdminComponent } from './admin.component';
import { UserService } from '../../core/services/user.service';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { User } from 'src/app/core/models/usermodel';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatDialogModule, HttpClientTestingModule, BrowserAnimationsModule,
        RouterTestingModule, MatSnackBarModule, ReactiveFormsModule],
      declarations: [AdminComponent],
      providers: [
        { provide: UserService, useClass: UserService },
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getUsers', () => {
    spyOn(component, 'getUsers').and.callThrough();
    component.getUsers();
    fixture.detectChanges();
    expect(component.getUsers).toHaveBeenCalled();
  });

  it('should call addUser', () => {
    spyOn(component, 'addUser').and.callThrough();
    component.addUser();
    fixture.detectChanges();
    expect(component.addUser).toHaveBeenCalled();
  });

  it('should call deleteUser', () => {
    spyOn(component, 'deleteUser').and.callThrough();
    component.deleteUser(1);
    fixture.detectChanges();
    expect(component.deleteUser).toHaveBeenCalled();
  });

  it('should call deleteUser', () => {
    spyOn(component, 'deleteUser').and.callThrough();
    component.deleteUser(1);
    fixture.detectChanges();
    expect(component.deleteUser).toHaveBeenCalled();
  });

});
