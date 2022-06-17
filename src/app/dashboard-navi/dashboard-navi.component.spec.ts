import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardNaviComponent } from './dashboard-navi.component';

describe('DashboardNaviComponent', () => {
  let component: DashboardNaviComponent;
  let fixture: ComponentFixture<DashboardNaviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardNaviComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardNaviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
