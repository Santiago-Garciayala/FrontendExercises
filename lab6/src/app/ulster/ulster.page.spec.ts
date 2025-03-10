import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UlsterPage } from './ulster.page';

describe('UlsterPage', () => {
  let component: UlsterPage;
  let fixture: ComponentFixture<UlsterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UlsterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
