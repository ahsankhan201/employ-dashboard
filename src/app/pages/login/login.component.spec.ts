import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, MatDialogModule, MatSnackBarModule, ReactiveFormsModule],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call createLoginForm', () => {
    spyOn(component, 'createLoginForm').and.callThrough();
    component.createLoginForm();
    fixture.detectChanges();
    expect(component.createLoginForm).toHaveBeenCalled();
  });

  it('should call handleLogin', () => {
    spyOn(component, 'handleLogin').and.callThrough();
    component.handleLogin();
    fixture.detectChanges();
    expect(component.handleLogin).toHaveBeenCalled();
  });
});
