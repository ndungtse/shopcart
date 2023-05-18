import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
})
export class HomepageComponent {
  products = [
    {
      name: 'Product 1',
      price: 100,
      description:
        'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://via.placeholder.com/200x150',
    },
    {
      name: 'Product 2',
      price: 150,
      description:
        'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://via.placeholder.com/200x150',
    },
  ];
}
