import { Component, OnInit } from '@angular/core';
import { ProductCard } from './models/productcard';
import { ProductService } from './services/product.service';
import { DataCard } from './models/datacard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'My store';
  public loading: boolean = true;
  displayMode: number = 2;
  filteredCardList: ProductCard[] = [];
  productCardList: ProductCard[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService
        .getAllProductCard()
        .subscribe((data: DataCard) => {
          this.productCardList = data.cards;
          this.filteredCardList =  data.cards;
          this.loading = false;
        }
    )
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredCardList = this.productCardList;
    }
  
    this.filteredCardList = this.productCardList.filter(
      (productCard) => {
        return productCard?.name.toLowerCase().includes(text.toLowerCase());
      }
    );
  }

  onDisplayModeChange(mode: number): void {
    this.displayMode = mode;
  }
}
