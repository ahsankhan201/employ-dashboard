import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

import { Roles } from '../../models/enums';
import { User } from './../../models/usermodel';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-edit-dialog',
  templateUrl: './user-edit-dialog.component.html',
  styleUrls: ['./user-edit-dialog.component.css'],
})
export class UserEditDialogComponent implements OnInit {
  userData: User;
  editMode: boolean;
  isAdmin: boolean;
  deleteMode: boolean;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  userFormGroup: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<UserEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { user: User; editMode: boolean; deleteMode?: boolean }
  ) { }

  ngOnInit() {
    this.setUserData();
  }

  cerateUserForm() {
    this.userFormGroup = this.formBuilder.group({
      joining: [this.data.user ? this.data.user.joining : '', [Validators.required]],
      name: [this.data.user ? this.data.user.name : '', [Validators.required]],
      education: [this.data.user ? this.data.user.education : '', [Validators.required]],
      username: [this.data.user ? this.data.user.username : '', [Validators.required]],
      hobbies: ['']
    });
    if (this.isAdmin) {
      this.userFormGroup.addControl('password', this.formBuilder.control('', [Validators.required]));
    }
  }

  /**
   * @methodName setUserData,
   * @description set user data in dialog box
   * @parameters null
   * @return none
   */
  setUserData(): void {

    this.userData = this.data.user;
    this.editMode = this.data.editMode;
    this.deleteMode = this.data.deleteMode;
    const currentUser: User = JSON.parse(localStorage.getItem('User'));
    if (currentUser) {
      this.isAdmin = currentUser.role === Roles.Admin ? true : false;
    }
    this.cerateUserForm();
  }

  /**
   * @methodName removeHobby,
   * @description remove hobby from users hobby list,
   * @parameters hobby<string>,
   * @return none
   */
  removeHobby(hobby: string): void {
    if (this.userData) {
      this.userData.hobbies = this.userData.hobbies.filter((userHobby) => userHobby !== hobby);
    }
  }

  /**
   * @methodName addHobby,
   * @description Add hobby into users hobby list,
   * @parameters event<MatChipInputEvent>,
   * @return none
   */
  addHobby(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    if ((value || '').trim()) {
      this.userData.hobbies.push(value.trim());
    }
    if (input) {
      input.value = '';
    }
  }

  /**
   * @methodName sendUser,
   * @description Closes the dialog and returns user data,
   * @parameters none,
   * @return none
   */
  sendUser(): void {
    if (this.deleteMode) {
      this.dialogRef.close(true);
    } else {
      this.userData.name = this.userFormGroup.get('name').value;
      this.userData.username = this.userFormGroup.get('username').value;
      this.userData.password = this.userFormGroup.get('password')?.value;
      this.userData.education = this.userFormGroup.get('education').value;
      this.userData.joining = this.userFormGroup.get('joining').value;
      this.dialogRef.close(this.userData);
    }

  }
}
