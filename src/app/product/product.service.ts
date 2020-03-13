import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Product } from './product';
import { catchError, tap } from 'rxjs/operators';
import { stringify } from 'querystring';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productUrl = 'https://localhost:44370/api/products';
  constructor(private http: HttpClient) { }


  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productUrl)
      .pipe(
        tap(data => console.log('Products:' + JSON.stringify(data))),
        catchError(this.handleError)

      );
  }

  addProduct(product: Product) {
    const headers = new HttpHeaders({'Content-type': 'application/json'});
    return this.http.post<Product>(this.productUrl , product, { headers } )
        .pipe(
          tap(data => console.log('New Product:' + JSON.stringify(data))),
          catchError(this.handleError)
          );
  }

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
