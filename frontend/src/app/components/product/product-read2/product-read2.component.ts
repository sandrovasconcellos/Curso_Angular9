import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ProductRead2DataSource } from './product-read2-datasource';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-read2',
  templateUrl: './product-read2.component.html',
  styleUrls: ['./product-read2.component.css']
})
export class ProductRead2Component implements AfterViewInit, OnInit {

  //<mat-paginator
  //ele percorre o html procurando a tag matpaginator
  @ViewChild(MatPaginator) paginatorTesteSandro: MatPaginator;    
  @ViewChild(MatSort) sort: MatSort;
  //passando o modelo de produto
  @ViewChild(MatTable) tableSandro: MatTable<Product>;
  
  //criação do objeto
  dataSource: ProductRead2DataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  //colunas visiveis
  displayedColumns = ['id', 'name', 'price'];

  ngOnInit() {
    //instanciando o objeto da classe ProductRead2DataSource no product-read2-datasource
    this.dataSource = new ProductRead2DataSource();
  }

  //chamado depois que todos os componentes são inicializados na tela
  ngAfterViewInit() {
    //preenchendo os atributos da classe do datasource
    this.dataSource.paginator = this.paginatorTesteSandro;
    this.dataSource.sort = this.sort;  

    //atribui para o datasource do html
    this.tableSandro.dataSource = this.dataSource;
  }
}
