import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  text = input('');
  backgroundColor = input('');
  fontColor = input('');
  padding = input('');
  fontSize = input('');
  fontWeight = input('');
  border = input('');
}
