import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FooterComponent, HeaderComponent, MainComponent } from './components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, MainComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'dilvant-landing';
}
