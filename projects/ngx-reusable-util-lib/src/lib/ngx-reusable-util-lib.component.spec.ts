import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxReusableUtilLibComponent } from './ngx-reusable-util-lib.component';

describe('NgxReusableUtilLibComponent', () => {
  let component: NgxReusableUtilLibComponent;
  let fixture: ComponentFixture<NgxReusableUtilLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxReusableUtilLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxReusableUtilLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
