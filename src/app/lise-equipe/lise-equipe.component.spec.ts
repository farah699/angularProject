import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiseEquipeComponent } from './lise-equipe.component';

describe('LiseEquipeComponent', () => {
  let component: LiseEquipeComponent;
  let fixture: ComponentFixture<LiseEquipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiseEquipeComponent]
    });
    fixture = TestBed.createComponent(LiseEquipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
