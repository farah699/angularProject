import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiseMatchComponent } from './lise-match.component';

describe('LiseMatchComponent', () => {
  let component: LiseMatchComponent;
  let fixture: ComponentFixture<LiseMatchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiseMatchComponent]
    });
    fixture = TestBed.createComponent(LiseMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
