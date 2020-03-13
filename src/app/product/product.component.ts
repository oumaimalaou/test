import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product';


export interface Tile {
  cols: number;
  rows: number;
  text: string;
  border: string;
}
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[];
  errorMessage: '';
  tiles: Tile[] = [
    {text: 'Tile 1', cols: 2, rows: 1 , border: '3px double purple'},
    {text: 'Tile 2', cols: 2, rows: 1 , border: '3px double red'},
    {text: 'Tile 3', cols: 2, rows: 1 , border: '3px double skyblue'},
    {text: 'Tile 4', cols: 2, rows: 1 , border: '3px double yellow'},
    ];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: products => {
        console.log(products);
        this.products = products;
      } ,
      error: err => this.errorMessage = err
    });
  }



}
