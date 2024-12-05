import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-seasonal-dish',
  standalone: true,
  imports: [],
  templateUrl: './seasonal-dish.component.html',
  styleUrl: './seasonal-dish.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeasonalDishComponent {}
