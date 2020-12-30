import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateinfoComponent } from './stateinfo.component';

describe('StateinfoComponent', () => {
  let component: StateinfoComponent;
  let fixture: ComponentFixture<StateinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StateinfoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StateinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
