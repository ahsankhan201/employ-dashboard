import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from './../../core/models/usermodel';
import { Roles } from './../../core/models/enums';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  subscription$ = new Subscription();
  loginFormGroup: FormGroup;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit(){
    this.createLoginForm();
  }
  /**
   * @methodName createLoginForm,
   * @description  Used to create login form group
   * @parameters none,
   * @return none
   */
  createLoginForm(): void {
    this.loginFormGroup = this.formBuilder.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  /**
   * @methodName handleLogin,
   * @description  Set authentic user into local storage, Navigates based on role,
   * @parameters none,
   * @return none
   */
  handleLogin(): void {
    const userName = this.loginFormGroup.get('userName').value;
    const password = this.loginFormGroup.get('password').value;
    if (userName && password) {
      this.subscription$.add(this.authenticationService
        .login(userName, password)
        .subscribe((user: User | undefined) => {
          if (user) {
            localStorage.setItem('User', JSON.stringify(user));
            this.userService.setUser();
            user.role === Roles.Admin
              ? this.router.navigate(['/admin'])
              : this.router.navigate(['/user']);
          } else {
            this.snackBar.open('Username or password not matched', 'Seen', {
              duration: 2000,
            });
          }
        }));
    }
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }
}
