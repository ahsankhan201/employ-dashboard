import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { User } from '../../models/usermodel';
import { AuthenticationService } from '../../services/authentication.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.css'],
})
export class AppBarComponent implements OnInit, OnDestroy {
  subscription$ = new Subscription();
  public username: string;

  constructor(public auth: AuthenticationService, public router: Router, public userService: UserService) { }

  ngOnInit(): void {
    this.setUserName();
  }

  /**
   * @methodName setUserName,
   * @description set userName for top bar
   * @parameters none,
   * @return none
   */
  setUserName(): void {
    this.userService.logedUser.subscribe(user => {
      if (user) {
      this.username = user.name;
      }
    });
  }

  /**
   * @methodName logout,
   * @description Logs out user and navigates to login page,
   * @parameters none,
   * @return none
   */
  logout(): void {
    this.subscription$.add(this.auth.logout().subscribe((response) => this.router.navigate(['/'])));
  }

  ngOnDestroy(){
    this.subscription$.unsubscribe();
  }
}
