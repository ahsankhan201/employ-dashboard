import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

import { User } from './../../core/models/usermodel';
import { UserService } from './../../core/services/user.service';
import { DialogService } from 'src/app/core/services/dialog.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit, OnDestroy {
  subscription$ = new Subscription();
  displayedColumns: string[] = [
    'name',
    'joining',
    'education',
    'hobbies',
    'edit',
    'delete',
  ];
  users: User[] = [];

  constructor(public userService: UserService, public dialog: MatDialog, public dialogService: DialogService) { }

  ngOnInit() {
    this.getUsers();
  }

  /**
   * @methodName getUsers,
   * @description  get users list
   * @parameters none,
   * @return none
   */
  getUsers(): void {
    this.subscription$.add(this.userService.getUsersList().subscribe((res: User[]) => { this.users = res; }));
  }

  /**
   * @methodName editUser,
   * @description  Edit user in dialog box,
   * @parameters user: User,
   * @return none
   */
  editUser(user: User): void {
    const dialogRef = this.dialogService.openUserDialog({ user: { ...user }, editMode: true });

    dialogRef.subscribe((data: User) => {
      if (data) {
        this.subscription$.add(this.userService.updateUser(data).subscribe((res) => {
          this.userService
            .getUsersList()
            .subscribe((users: User[]) => (this.users = users));
        }));
      }
    });
  }

  /**
   * @methodName deleteUser,
   * @description  Deletes user based on id,
   * @parameters id: Number,
   * @return none
   */
  deleteUser(id: number): void {
    const dialogRef = this.dialogService.openUserDialog({ deleteMode: true });
    dialogRef.subscribe((data: User) => {
      if (data) {
        alert(data);
        this.subscription$.add(this.userService.deleteUser(id).subscribe((response) => {
          this.userService
            .getUsersList()
            .subscribe((users: User[]) => (this.users = users));
        }));
      }
    });
  }

  /**
   * @methodName addUser,
   * @description  Add new User,
   * @parameters none,
   * @return none
   */
  addUser(): void {
    const dialogRef = this.dialogService.openUserDialog({ user: new User().createNewUser(), editMode: false });
    dialogRef.subscribe((user: User) => {
      if (user) {
        this.subscription$.add(this.userService.addUser(user).subscribe((res) => {
          this.userService.getUsersList().subscribe((users: User[]) => (this.users = users));
        }));
      }
    });
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }
}
