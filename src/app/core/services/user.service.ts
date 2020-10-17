import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { User } from '../models/usermodel';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  logedUser = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('User')));
  constructor(public http: HttpClient) { }

  /**
   * @methodName setUser,
   * @description set logedin user data,
   * @parameters none
   * @return none
   */
  setUser(): void {
    this.logedUser.next(JSON.parse(localStorage.getItem('User')));
  }
  /**
   * @methodName getUsersList,
   * @description Retrieves all users,
   * @parameters none
   * @return Observable<User>
   */
  getUsersList() {
    return this.http.get('/api/users');
  }

  /**
   * @methodName deleteUser,
   * @description Deletes user based on id,
   * @parameters id:number
   * @return Observable<any>
   */
  deleteUser(id: number): Observable<any> {
    return this.http.delete(`/api/users/${id}`);
  }

  /**
   * @methodName addUser,
   * @descriptionMakes request to server to add new user,
   * @parameters user: User,
   * @return Observable<any>
   */
  addUser(user: User): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/json; charset=utf-8'
    );
    return this.http.post('api/users', user, { headers });
  }

  /**
   * @methodName updateUser,
   * @descriptionMakes request to server to update user,
   * @parameters user: User,
   * @return Observable<any>
   */
  updateUser(user: User): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type', 'application/json; charset=utf-8'
    );
    return this.http.put(`api/users/${user.id}`, user, { headers });
  }
}
