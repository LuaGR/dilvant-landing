import { Component } from '@angular/core';
import { RecipesComponent } from './components/recipes/recipes.component';
import { SeasonalDishComponent } from './components/seasonal-dish/seasonal-dish.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RecipesComponent, SeasonalDishComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {}
