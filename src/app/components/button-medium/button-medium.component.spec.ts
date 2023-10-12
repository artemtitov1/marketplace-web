import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonMediumComponent } from './button-medium.component';

describe('ButtonMediumComponent', () => {
  let component: ButtonMediumComponent;
  let fixture: ComponentFixture<ButtonMediumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonMediumComponent]
    });
    fixture = TestBed.createComponent(ButtonMediumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
