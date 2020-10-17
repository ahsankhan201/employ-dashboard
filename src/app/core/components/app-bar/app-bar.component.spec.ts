import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppBarComponent } from './app-bar.component';

describe('AppBarComponent', () => {
  let component: AppBarComponent;
  let fixture: ComponentFixture<AppBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [AppBarComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call setUserName', () => {
    spyOn(component, 'setUserName').and.callThrough();
    component.setUserName();
    fixture.detectChanges();
    expect(component.setUserName).toHaveBeenCalled();
  });

  it('should call logout', () => {
    spyOn(component, 'logout').and.callThrough();
    component.logout();
    fixture.detectChanges();
    expect(component.logout).toHaveBeenCalled();
  });
});
