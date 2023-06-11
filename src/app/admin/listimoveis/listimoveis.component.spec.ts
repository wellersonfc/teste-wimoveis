import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListimoveisComponent } from './listimoveis.component';

describe('ListimoveisComponent', () => {
  let component: ListimoveisComponent;
  let fixture: ComponentFixture<ListimoveisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListimoveisComponent]
    });
    fixture = TestBed.createComponent(ListimoveisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
