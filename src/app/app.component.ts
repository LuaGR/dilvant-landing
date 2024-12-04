import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent, MainComponent } from './components';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'dilvant-landing';
}
