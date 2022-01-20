import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipsDataContainerComponent } from './ships-data-container.component';

describe('ShipsDataContainerComponent', () => {
  let component: ShipsDataContainerComponent;
  let fixture: ComponentFixture<ShipsDataContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipsDataContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipsDataContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
