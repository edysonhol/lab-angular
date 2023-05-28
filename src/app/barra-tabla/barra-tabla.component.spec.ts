import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraTablaComponent } from './barra-tabla.component';

describe('BarraTablaComponent', () => {
  let component: BarraTablaComponent;
  let fixture: ComponentFixture<BarraTablaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarraTablaComponent]
    });
    fixture = TestBed.createComponent(BarraTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
