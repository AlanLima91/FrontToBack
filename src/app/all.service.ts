import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {throwError as observableThrowError,  Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Order } from './order';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AllService
{
  constructor(private http:HttpClient)
  {

  }
  /**
   *  Read all Users 
   *  return a table of user
   */
  getUsers():Observable<User[]>
  {
    return this.http.get<User[]>('https://fronttoback-2c84a.firebaseio.com/users.json')
        .pipe(
          tap(data => {
            data
          }),
          catchError(this.handleError('getUsers', []))
        );
  }

  /**
   *  Read all Orders
   *  return a table of order
   */
  getOrders():Observable<Order[]>
  {
    return this.http.get<Order[]>('https://beers-cf53e.firebaseio.com/orders.json')
        .pipe(
          tap(data => {
            data
          }),
          catchError(this.handleError('getOrders', []))
        );
  }

  /**
   *  Add a new User to the table
   *  @param User
   */
  addUser(user: User): Observable<User>
  {
    let url = `https://fronttoback-2c84a.firebaseio.com/users.json`;
    return this.http.post<User>(url, user, {responseType: 'json'}).pipe(
        tap((product: User) => console.log('User Added')),
        catchError(this.handleError<User>('addBeer')),
      );
  }

  /**
   *  Add a new Order to the table
   *  @param Order
   */
  addOrder(order: Order): Observable<Order>
  {
    let url = `https://fronttoback-2c84a.firebaseio.com/orders.json`;
    return this.http.post<Order>(url, order, {responseType: 'json'}).pipe(
        tap((product: Order) => console.log('beer added')),
        catchError(this.handleError<Order>('addBeer')),
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
