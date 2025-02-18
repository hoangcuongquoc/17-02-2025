import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverplayNavComponent } from './overplay-nav.component';

describe('OverplayNavComponent', () => {
  let component: OverplayNavComponent;
  let fixture: ComponentFixture<OverplayNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverplayNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverplayNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
