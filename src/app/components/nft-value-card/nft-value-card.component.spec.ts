import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftValueCardComponent } from './nft-value-card.component';

describe('NftValueCardComponent', () => {
  let component: NftValueCardComponent;
  let fixture: ComponentFixture<NftValueCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NftValueCardComponent]
    });
    fixture = TestBed.createComponent(NftValueCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
