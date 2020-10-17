import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UserEditDialogComponent } from '../components/user-edit-dialog/user-edit-dialog.component';
import { User } from '../models/usermodel';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  private dialogRef: MatDialogRef<UserEditDialogComponent>;
  constructor(public dialog: MatDialog) { }

  /**
   * @methodName open
   * @description open dialog box
   * @parameters userData
   * @return none
   */
  open(userData: any): void {
    const options = (userData.deleteMode) ?
      { width: '35%', height: '30%', data: userData } :
      { width: '75%', height: '65%', data: userData };
    this.dialogRef = this.dialog.open(UserEditDialogComponent, options);
  }

  /**
   * @methodName openUserDialog
   * @description open dialog box
   * @parameters userData
   * @return observable<any>
   */
  confirmed(): Observable<any> {
    return this.dialogRef.afterClosed().pipe(take(1), map(res => {
      return res;
    }));
  }

  /**
   * @methodName openUserDialog
   * @description open dialog box
   * @parameters userData
   * @return observable<any>
   */
  openUserDialog(userData: any): Observable<any> {
    this.open(userData);
    return this.confirmed();
  }
}
