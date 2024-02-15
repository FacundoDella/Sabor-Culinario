import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealsRandomComponent } from './meals-random.component';

describe('MealsRandomComponent', () => {
  let component: MealsRandomComponent;
  let fixture: ComponentFixture<MealsRandomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MealsRandomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MealsRandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
