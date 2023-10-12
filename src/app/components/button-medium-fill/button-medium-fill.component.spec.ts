import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonMediumFillComponent } from './button-medium-fill.component';

describe('ButtonMediumFillComponent', () => {
  let component: ButtonMediumFillComponent;
  let fixture: ComponentFixture<ButtonMediumFillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonMediumFillComponent]
    });
    fixture = TestBed.createComponent(ButtonMediumFillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
