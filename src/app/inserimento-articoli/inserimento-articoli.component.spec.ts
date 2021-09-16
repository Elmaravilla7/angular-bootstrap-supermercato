import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserimentoArticoliComponent } from './inserimento-articoli.component';

describe('InserimentoArticoliComponent', () => {
  let component: InserimentoArticoliComponent;
  let fixture: ComponentFixture<InserimentoArticoliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InserimentoArticoliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InserimentoArticoliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
