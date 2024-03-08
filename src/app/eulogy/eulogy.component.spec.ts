import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EulogyComponent } from './eulogy.component';

describe('EulogyComponent', () => {
  let component: EulogyComponent;
  let fixture: ComponentFixture<EulogyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EulogyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EulogyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
