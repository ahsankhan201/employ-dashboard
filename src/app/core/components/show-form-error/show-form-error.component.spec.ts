import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFormErrorComponent } from './show-form-error.component';

describe('ShowFormErrorComponent', () => {
  let component: ShowFormErrorComponent;
  let fixture: ComponentFixture<ShowFormErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowFormErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowFormErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
