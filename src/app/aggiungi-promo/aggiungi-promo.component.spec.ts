import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggiungiPromoComponent } from './aggiungi-promo.component';

describe('AggiungiPromoComponent', () => {
  let component: AggiungiPromoComponent;
  let fixture: ComponentFixture<AggiungiPromoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggiungiPromoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AggiungiPromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
