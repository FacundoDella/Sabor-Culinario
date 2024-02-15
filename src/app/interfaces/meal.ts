 export interface Meal {
	strMeal: string;
	strMealThumb: string;
	idMeal: string;
}

export interface MealItem {
	meals: Meal[];
}
