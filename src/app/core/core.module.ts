import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserEditDialogComponent } from './components/user-edit-dialog/user-edit-dialog.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';
import { MatChipsModule } from '@angular/material/chips';
import { HttpRequestInterceptor } from './interceptor/http-request.interceptor';
import { AppBarComponent } from './components/app-bar/app-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ShowFormErrorComponent } from './components/show-form-error/show-form-error.component';

@NgModule({
  declarations: [UserEditDialogComponent, AppBarComponent, ShowFormErrorComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatDialogModule,
    HttpClientModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    MatToolbarModule,
    MatSnackBarModule,
  ],
  providers: [
    MatNativeDateModule,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true,
    },
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatDialogModule,
    HttpClientModule,
    UserEditDialogComponent,
    AppBarComponent,
    ShowFormErrorComponent,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    MatToolbarModule,
    MatSnackBarModule,
  ],
})
export class CoreModule {}
