import { Component, Input } from '@angular/core';
import { Meal } from '../../interfaces/meal';
import { NgIf, NgOptimizedImage } from '@angular/common';
import { Router } from '@angular/router';
import { info } from '../../interfaces/inputInfo';
@Component({
  selector: 'app-meals',
  standalone: true,
  imports: [NgIf, NgOptimizedImage],
  templateUrl: './meals.component.html',
  styleUrl: './meals.component.css'
})
export class MealsComponent {
  @Input() meal!: Meal;
  info = info;
  constructor(private router: Router) { }
  goToMeal() {
    this.info.mealId = this.meal.idMeal;
    this.router.navigate(['/meal']);
  }
}
