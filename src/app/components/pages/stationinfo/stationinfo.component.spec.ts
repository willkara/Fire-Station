import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationinfoComponent } from './stationinfo.component';

describe('StationinfoComponent', () => {
  let component: StationinfoComponent;
  let fixture: ComponentFixture<StationinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StationinfoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StationinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
