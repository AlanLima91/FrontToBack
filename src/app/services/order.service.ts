import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {throwError as observableThrowError,  Observable } from 'rxjs';
import { tap, catchError, filter } from 'rxjs/operators';
import { Order } from '../order';

import { MenuService } from "./menu.service";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient, private menuService: MenuService) { }

   /**
   *  Read all Orders
   *  return a table of order
   */
  getOrders():Observable<Order[]>
  {
    return this.http.get<Order[]>('http://localhost:8000/orders')
        .pipe(
          tap(data => {
            data
          }),
          catchError(this.handleError('getOrders', []))
        );
  }

  /**
   *  Add a new Order to the table
   *  @param Order
   */
  addOrder(order: Order): Observable<Order>
  {
    let url = `http://localhost:8000/orders`;
    // , {responseType: 'json'}
    return this.http.post<Order>(url, order, {responseType: 'json'}).pipe(
        tap((product: Order) => console.log('order Added')),
        catchError(this.handleError<Order>('addBeer')),
      );
  }

  /** DELETE: delete one beer */
  deleteOrder(key: string): Observable<Order>{
    let url = `http://localhost:8000/orders/`+key;
    return this.http.delete<Order>(url)
      .pipe(
        tap(data=>data),
        catchError(this.handleError<Order>('deleteBeer'))
      );
  }
  
   /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return (error);
    };
  }

}
