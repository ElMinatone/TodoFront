import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LembretesComponent } from './lembretes.component';

describe('LembretesComponent', () => {
  let component: LembretesComponent;
  let fixture: ComponentFixture<LembretesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LembretesComponent]
    });
    fixture = TestBed.createComponent(LembretesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
