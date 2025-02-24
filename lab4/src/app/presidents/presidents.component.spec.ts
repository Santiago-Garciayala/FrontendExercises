import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresidentsComponent } from './presidents.component';

describe('PresidentsComponent', () => {
  let component: PresidentsComponent;
  let fixture: ComponentFixture<PresidentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresidentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresidentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
