import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RecipesComponent } from './components/recipes/recipes.component';
import { SeasonalDishComponent } from './components/seasonal-dish/seasonal-dish.component';
import { FavoriteDishComponent } from './components/favorite-dish/favorite-dish.component';
import { UniqueExperienceComponent } from './components/unique-experience/unique-experience.component';
import { ReservationComponent } from './components/reservation/reservation.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    RecipesComponent,
    SeasonalDishComponent,
    FavoriteDishComponent,
    UniqueExperienceComponent,
    ReservationComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {}
