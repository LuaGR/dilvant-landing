import { Component } from '@angular/core';
import { RecipesComponent } from './components/recipes/recipes.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RecipesComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {}
