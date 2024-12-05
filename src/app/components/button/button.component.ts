import { Component, input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  text = input('')
  backgroundColor = input('')
  fontColor = input('')
  padding = input('')
  fontSize = input('')
  fontWeight = input('')
  border = input('')
}
