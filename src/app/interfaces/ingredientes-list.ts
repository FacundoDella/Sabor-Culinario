export interface Ingrediente {
	idIngredient: string;
	strIngredient: string;
	strDescription: string;
	strType?: any;
}

export interface Ingredientes {
	meals: Ingrediente[];
}



