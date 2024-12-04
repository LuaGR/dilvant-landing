import { Component } from '@angular/core';
import { ButtonComponent } from '../../../button/button.component';

@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.css'
})
export class PresentationComponent {

}