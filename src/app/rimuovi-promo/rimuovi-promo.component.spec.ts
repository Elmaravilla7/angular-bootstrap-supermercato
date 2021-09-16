import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RimuoviPromoComponent } from './rimuovi-promo.component';

describe('RimuoviPromoComponent', () => {
  let component: RimuoviPromoComponent;
  let fixture: ComponentFixture<RimuoviPromoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RimuoviPromoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RimuoviPromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
