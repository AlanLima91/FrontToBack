import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {throwError as observableThrowError,  Observable } from 'rxjs';
import { tap, catchError, filter } from 'rxjs/operators';
import { Order } from '../order';
import { User } from '../user';
import { Menu } from '../menu';

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
    return this.http.get<User[]>('http://localhost:8000/users')
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
    return this.http.get<Order[]>('http://localhost:8000')
        .pipe(
          tap(data => {
            data
          }),
          catchError(this.handleError('getOrders', []))
        );
  }

  /**
   *  Read all Menu 
   *  return a table of menu
   */
  getMenus():Observable<Menu[]>
  {
    return this.http.get<Menu[]>('http://localhost:8000/menus')
        .pipe(
          tap(data => {
            data
          }),
          catchError(this.handleError('getMenus', []))
        );
  }


  /**
   *  Read all Users and look for one user
   *  return a user
   */
  getUserByKey(key: string): Observable<User[]>
  {
    return this.http.get<User[]>('http://localhost:8000/users/'+key)
    .pipe(
      tap(data => data),
      catchError(this.handleError('getUserByKey', []))
    );
  }

  /**
   * Filter existing menus by day
   * return a table of menus
   */
  getMenusByDay(day: string): Observable<Menu[]>
  {
    let menus = this.getMenus();
    return menus;
      // .pipe(filter((menus) => menus.day == day))
      // .subscribe(Menu);
    
  }


  /**
   *  Add a new User to the table
   *  @param User
   */
  addUser(user: User): Observable<User>
  {
    let url = `http://localhost:8000/users`;
    // , {responseType: 'json'}
    return this.http.post<User>(url, user).pipe(
        tap((product: User) => console.log('User Added')),
        catchError(this.handleError<User>('addBeer')),
      );
  }

  /**
   *  Add a new User to the table
   *  @param menu
   */
  addMenu(menu: Menu): Observable<Menu>
  {
    let url = `http://localhost:8000/menus`;
    // , {responseType: 'json'}
    return this.http.post<Menu>(url, menu).pipe(
        tap((product: Menu) => console.log('menu added')),
        catchError(this.handleError<Menu>('addMenu')),
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
    return this.http.post<Order>(url, order).pipe(
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

    //** Read menus by day */
    getMenuByDay(day: string): Observable<Menu[]>{
      return this.http.get<Menu[]>('http://localhost:8000/menus.json?orderBy=\"day\"&equalTo=\"'+day+'\"');
    }

    getMenuByKey(key: string): Observable<Menu[]>{
      return this.http.get<Menu[]>('http://localhost:8000/menus/'+key)
      .pipe(
        tap(data => data),
        catchError(this.handleError('getBeerByKey', []))
      );
    }


    editMenu(menu: Menu, key: string): Observable<Menu> {
      const url = `http://localhost:8000/menus/`+key;
      return this.http.put<Menu>(url, menu, {responseType: 'json'}).pipe(
        tap((product: Menu) => console.log('menu edited')),
        catchError(this.handleError<Menu>('addMenu'))
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
