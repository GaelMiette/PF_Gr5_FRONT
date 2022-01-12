import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspacerecruteurComponent } from './espacerecruteur.component';

describe('EspacerecruteurComponent', () => {
  let component: EspacerecruteurComponent;
  let fixture: ComponentFixture<EspacerecruteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspacerecruteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspacerecruteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
