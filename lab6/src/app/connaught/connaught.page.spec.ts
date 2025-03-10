import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConnaughtPage } from './connaught.page';

describe('ConnaughtPage', () => {
  let component: ConnaughtPage;
  let fixture: ComponentFixture<ConnaughtPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnaughtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
