import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddimoveisComponent } from './addimoveis.component';

describe('AddimoveisComponent', () => {
  let component: AddimoveisComponent;
  let fixture: ComponentFixture<AddimoveisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddimoveisComponent]
    });
    fixture = TestBed.createComponent(AddimoveisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
