import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LittleAdComponent } from './little-ad.component';

describe('LittleAdComponent', () => {
  let component: LittleAdComponent;
  let fixture: ComponentFixture<LittleAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LittleAdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LittleAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
