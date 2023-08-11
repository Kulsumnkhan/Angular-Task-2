import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAComponent } from './form-a.component';

describe('FormAComponent', () => {
  let component: FormAComponent;
  let fixture: ComponentFixture<FormAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormAComponent]
    });
    fixture = TestBed.createComponent(FormAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
