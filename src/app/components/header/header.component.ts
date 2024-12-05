import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent, PresentationComponent } from './components';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavbarComponent, PresentationComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
