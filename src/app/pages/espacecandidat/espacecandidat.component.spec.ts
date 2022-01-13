import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspacecandidatComponent } from './espacecandidat.component';

describe('EspacecandidatComponent', () => {
  let component: EspacecandidatComponent;
  let fixture: ComponentFixture<EspacecandidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspacecandidatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspacecandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
