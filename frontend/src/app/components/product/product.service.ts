import { Injectable } from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001/products";

  // injeção de dependencia do snakbar
  constructor(private snakBar: MatSnackBar, 
              private http: HttpClient) { }

  showMenssage(msg: string): void {
    this.snakBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
    })
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product)   
  }
  
  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl)
  }

  readById(id: number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Product>(url);
  }

  update(produto: Product): Observable<Product> {
    const url = `${this.baseUrl}/${produto.id}`;
    return this.http.put<Product>(url, produto);
  }

  delete(id: number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Product>(url);
  }

}
  