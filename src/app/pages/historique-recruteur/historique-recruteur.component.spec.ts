import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueRecruteurComponent } from './historique-recruteur.component';

describe('HistoriqueRecruteurComponent', () => {
  let component: HistoriqueRecruteurComponent;
  let fixture: ComponentFixture<HistoriqueRecruteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriqueRecruteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriqueRecruteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
