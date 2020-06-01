import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  public product: Product;

  constructor(private productService: ProductService,
              private router: Router,
              private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.activatedRouter.snapshot.paramMap.get('id');
    this.productService.readById(id).subscribe(pProd => {
      this.product = pProd;
    })
  }

  deleteProduct(): void {
    this.productService.delete(this.product.id).subscribe(() => {
      this.productService.showMenssage(`O produto ${this.product.name} foi excluido como sucesso!`);
      this.router.navigate(['/products']);
    });
  }

  cancelar(): void {
      this.router.navigate(['/products']);
  }
}
