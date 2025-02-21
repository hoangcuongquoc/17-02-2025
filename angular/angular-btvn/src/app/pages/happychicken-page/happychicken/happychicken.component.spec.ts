import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HappychickenComponent } from './happychicken.component';

describe('HappychickenComponent', () => {
  let component: HappychickenComponent;
  let fixture: ComponentFixture<HappychickenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HappychickenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HappychickenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
