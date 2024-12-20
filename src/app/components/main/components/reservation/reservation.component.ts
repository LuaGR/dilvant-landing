import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from '../../../button/button.component';

@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReservationComponent {}
