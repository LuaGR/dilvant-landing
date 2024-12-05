import { Component } from '@angular/core';

@Component({
  selector: 'app-favorite-dish',
  standalone: true,
  imports: [],
  templateUrl: './favorite-dish.component.html',
  styleUrl: './favorite-dish.component.css'
})
export class FavoriteDishComponent {

  items = [
    {
      id: 1,
      text: 'Ofrecemos platos que combinan tradición y modernidad, diseñados para deleitar tu paladar.',
      alt: 'Platillo del menú',
      image: '/favorite-dish/thumbnail-platos.webp'
    },
    {
      id: 2,
      text: 'Disfruta de un ambiente acogedor mientras degustas nuestros sabrosos platos.',
      alt: 'Restaurante',
      image: '/favorite-dish/thumbnail-restaurante.webp'
    },
    {
      id: 3,
      text: 'La excelencia de la cocina peruana se refleja en nuestros platos.',
      alt: 'Chefs',
      image: '/favorite-dish/thumbnail-chefs.webp'
    }
  ]
}
