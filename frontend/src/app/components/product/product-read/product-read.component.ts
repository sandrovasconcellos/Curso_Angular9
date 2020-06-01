import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[]
  displayedColumns = ['id', 'name', 'price', 'action']
  
  constructor(private productServer: ProductService) { }

  ngOnInit(): void {
    //o pProducts é o retorno do get
    this.productServer.read().subscribe(pProducts => {
      this.products = pProducts
      console.log(this.products)
    })

  }

}
