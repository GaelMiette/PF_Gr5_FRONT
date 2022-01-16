import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnonceListeCandidatsComponent } from './annonce-liste-candidats.component';

describe('AnnonceListeCandidatsComponent', () => {
  let component: AnnonceListeCandidatsComponent;
  let fixture: ComponentFixture<AnnonceListeCandidatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnonceListeCandidatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnonceListeCandidatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
