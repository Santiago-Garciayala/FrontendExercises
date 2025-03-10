import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LeinsterPage } from './leinster.page';

describe('LeinsterPage', () => {
  let component: LeinsterPage;
  let fixture: ComponentFixture<LeinsterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LeinsterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
