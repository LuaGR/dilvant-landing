import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  RecipesComponent,
  SeasonalDishComponent,
  FavoriteDishComponent,
  UniqueExperienceComponent,
  ReservationComponent,
} from './components';

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
