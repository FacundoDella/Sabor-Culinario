import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealInfoResultsComponent } from './meal-info-results.component';

describe('MealInfoResultsComponent', () => {
  let component: MealInfoResultsComponent;
  let fixture: ComponentFixture<MealInfoResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MealInfoResultsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MealInfoResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
