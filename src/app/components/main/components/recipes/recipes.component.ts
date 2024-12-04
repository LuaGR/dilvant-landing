import { Component } from '@angular/core';
import { ButtonComponent } from '../../../button/button.component';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
})
export class RecipesComponent {
  recipes = [
    {
      id: 1,
      title: 'Postres Peruanos',
      image: '/recipes/postres-peruanos.webp',
    },
  ];
}
