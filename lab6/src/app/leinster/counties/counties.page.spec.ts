import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CountiesPage } from './counties.page';

describe('CountiesPage', () => {
  let component: CountiesPage;
  let fixture: ComponentFixture<CountiesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CountiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
