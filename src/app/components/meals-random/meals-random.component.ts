import { Component, Input } from '@angular/core';
import { Meal } from '../../interfaces/meal';
import { NgIf, NgOptimizedImage } from '@angular/common';
import { info } from '../../interfaces/inputInfo';
import { Router } from '@angular/router';
@Component({
  selector: 'app-meals-random',
  standalone: true,
  imports: [NgIf, NgOptimizedImage],
  templateUrl: './meals-random.component.html',
  styleUrl: './meals-random.component.css'
})
export class MealsRandomComponent {
  @Input() meal!: Meal;
  info = info;

  constructor(private router:Router){}

  goToMeal() { 
    this.info.mealId = this.meal.idMeal;
    this.router.navigate(['/meal']);
  }
}
