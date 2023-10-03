import { Component, Input } from '@angular/core';
import { ProductCard } from '../models/productcard';

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.css']
})
export class ListContainerComponent {
  @Input() productCard!: ProductCard;
}
