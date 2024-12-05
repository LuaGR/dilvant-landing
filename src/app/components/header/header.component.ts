import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PresentationComponent } from './components/presentation/presentation.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavbarComponent, PresentationComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
