import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavbarComponent, PresentationComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
