import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LeinsterpagePage } from './leinsterpage.page';

describe('LeinsterpagePage', () => {
  let component: LeinsterpagePage;
  let fixture: ComponentFixture<LeinsterpagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LeinsterpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
