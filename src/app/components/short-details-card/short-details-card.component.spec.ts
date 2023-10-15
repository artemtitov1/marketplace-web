import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortDetailsCardComponent } from './short-details-card.component';

describe('ShortDetailsCardComponent', () => {
  let component: ShortDetailsCardComponent;
  let fixture: ComponentFixture<ShortDetailsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShortDetailsCardComponent]
    });
    fixture = TestBed.createComponent(ShortDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
