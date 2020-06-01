import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent  implements OnInit {
  //atributo
  product: Product

  constructor(private productService: ProductService,
              private router: Router,
              //recupera o parametro definido na rota 'path:"products/update/:id'" //podetia ter mais            
              private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    //recupera o parametro
    // o + converte para number
    const id = +this.activeRoute.snapshot.paramMap.get('id');
    this.productService.readById(id).subscribe(pProduto => {
      //preenche o atributo
      this.product = pProduto;  
    });
  }

  updateProduct(): void {
    this.productService.update(this.product).subscribe(pProduto => {
      this.productService.showMenssage(`O produto ${pProduto.name} foi alterado com sucesso.`);
      this.router.navigate(['/products'])
    })
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }

}
