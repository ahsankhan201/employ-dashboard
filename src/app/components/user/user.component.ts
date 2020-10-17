import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { User } from './../../core/models/usermodel';
import { DialogService } from 'src/app/core/services/dialog.service';
import { UserService } from 'src/app/core/services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit, OnDestroy {
  public user: User;
  subscription$ = new Subscription();
  constructor(public dialog: MatDialog, public dialogService: DialogService, public userService: UserService) { }

  ngOnInit() {
    this.userService.logedUser.subscribe(user => {
      this.user = user;
    });
  }

  /**
   * @methodName openEditDialog,
   * @description  open Dialog box with user details,
   * @parameters none,
   * @return none
   */
  openEditDialog(): void {
    const dialogRef = this.dialogService.openUserDialog({ user: { ...this.user }, editMode: true });
    dialogRef.subscribe((data: User) => {
      if (data) {
        this.subscription$.add(this.userService.updateUser(data).subscribe((res) => {
          this.userService.getUsersList().subscribe((users: User[]) => {
            localStorage.setItem('User', JSON.stringify(
              users.find((user) => user.username === this.user.username)));
            this.userService.setUser();
          });
        }));
      }
    });
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }
}
