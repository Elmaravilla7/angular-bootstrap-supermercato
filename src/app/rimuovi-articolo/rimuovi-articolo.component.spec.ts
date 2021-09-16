import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RimuoviArticoloComponent } from './rimuovi-articolo.component';

describe('RimuoviArticoloComponent', () => {
  let component: RimuoviArticoloComponent;
  let fixture: ComponentFixture<RimuoviArticoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RimuoviArticoloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RimuoviArticoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
