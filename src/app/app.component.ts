import { Component } from '@angular/core';
import { FooterComponent, HeaderComponent, MainComponent } from './components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, MainComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'dilvant-landing';
}
