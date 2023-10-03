import { Component, Input } from '@angular/core';
import { ProductCard } from '../models/productcard';

@Component({
  selector: 'app-grid-container',
  templateUrl: './grid-container.component.html',
  styleUrls: ['./grid-container.component.css']
})
export class GridContainerComponent {
  @Input() productCard!: ProductCard;
}
