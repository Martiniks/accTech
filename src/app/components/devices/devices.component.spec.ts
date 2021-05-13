import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Offices2Component } from './offices2.component';

describe('Offices2Component', () => {
  let component: Offices2Component;
  let fixture: ComponentFixture<Offices2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Offices2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Offices2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
