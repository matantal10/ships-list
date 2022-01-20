import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipsTableComponent } from './ships-table.component';

describe('ShipsTableComponent', () => {
  let component: ShipsTableComponent;
  let fixture: ComponentFixture<ShipsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
