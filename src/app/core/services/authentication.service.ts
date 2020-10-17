import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Observer } from 'rxjs';

import { User } from '../models/usermodel';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private userService: UserService) { }

  /**
   * @methodName login,
   * @description set logedin user data,
   * @parameters userName<string>, password<string>
   * @return Observable<User>
   */
  login(userName: string, password: string): Observable<User | undefined> {
    return new Observable((observer: Observer<User | undefined>) => {
      this.userService.getUsersList().subscribe((users: User[]) => {
        const logedUser: User | undefined = users.find(
          (user) => user.username === userName && user.password === password
        );
        observer.next(logedUser);
      });
    });
  }

  /**
   * @methodName logout,
   * @description  Removes current user from local storage,
   * @parameters none,
   * @return Observable<boolean>
   */
  logout(): Observable<boolean> {
    return new Observable((observer: Observer<boolean>) => {
      localStorage.removeItem('User');
      observer.next(true);
    });
  }
}
