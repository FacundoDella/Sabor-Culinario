import { Component, Input, OnInit } from '@angular/core';
import { mealTotalinfo } from '../../interfaces/mealTotal';
import { NgIf, NgOptimizedImage } from '@angular/common';
import { info } from '../../interfaces/inputInfo';
@Component({
  selector: 'app-meal-info',
  standalone: true,
  imports: [NgOptimizedImage, NgIf],
  templateUrl: './meal-info.component.html',
  styleUrl: './meal-info.component.css'
})
export class MealInfoComponent {
  @Input() mealInfo!: mealTotalinfo;
}
