import { Injectable } from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';
import { Observable, EMPTY, merge } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001/products";

  // injeção de dependencia do snakbar
  constructor(private snakBar: MatSnackBar, 
              private http: HttpClient) { }

  showMenssage(msg: string, isError: boolean = false): void {
    this.snakBar.open(msg, 'X', {
      duration: 6000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product).pipe(
      map(obj => obj),
      catchError((e) =>  this.errorHandler(e))
    );  
  }

  
  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError((e) =>  this.errorHandler(e))
    );  
  }
  
  readById(id: number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Product>(url).pipe(
      map(obj => obj),
      catchError((e) =>  this.errorHandler(e))
    );  
  }
    
  update(produto: Product): Observable<Product> {
    const url = `${this.baseUrl}/${produto.id}`;
    return this.http.put<Product>(url, produto).pipe(
      map(obj => obj),
      catchError((e) =>  this.errorHandler(e))
    );  
  }
      
  delete(id: number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Product>(url).pipe(
      map(obj => obj),
      catchError((e) =>  this.errorHandler(e))
    );  
  }

  errorHandler(e:any): Observable<any> {
    this.showMenssage(`Ocorreu um erro. -- Erro: ${e.message}`, true);
    return EMPTY;
  }        
}
      