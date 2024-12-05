import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from '../../../button/button.component';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipesComponent {
  protected recipes = [
    {
      id: 1,
      title: 'Postres Peruanos',
      image: '/recipes/postres-peruanos.webp',
    },
    {
      id: 2,
      title: 'Causa Rellena',
      image: '/recipes/causa-rellena.webp',
    },
    {
      id: 3,
      title: 'Aji de Gallina',
      image: '/recipes/lomo-saltado-recipe.webp',
    },
    {
      id: 4,
      title: 'Pisco Sour',
      image: '/recipes/pisco-sour.webp',
    },
    {
      id: 5,
      title: 'Ceviche',
      image: '/recipes/ceviche.webp',
    },
  ];
}
