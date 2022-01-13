import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAnnonceComponent } from './form-annonce.component';

describe('FormAnnonceComponent', () => {
  let component: FormAnnonceComponent;
  let fixture: ComponentFixture<FormAnnonceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAnnonceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
