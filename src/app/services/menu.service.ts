import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {throwError as observableThrowError,  Observable } from 'rxjs';
import { tap, catchError, filter } from 'rxjs/operators';
import { Menu } from '../menu';
import axios from 'axios';

const url = 'http://aston.maquette-potion-mediatique.com/';
@Injectable({
  providedIn: 'root'
})
export class MenuService {


  constructor(private http: HttpClient) { }
   /**
   *  Read all Menu
   *  return a table of menu
   */
  getMenus(): Observable<Menu[]>
  {
    // axios.get(url+'/menus').then(result => {
    //   console.log(result);
    //   return result;
    // })
    return this.http.get<Menu[]>(url + 'menus')
        .pipe(
          tap(data => ( {
            data
          }),
          catchError(this.handleError('getMenus', []))
        ));
  }

  // /**
  //  * Filter existing menus by day
  //  * return a table of menus
  //  */
  // getMenusByDay(day: string): Observable<Menu[]>
  // {
  //   let menus = this.getMenus();
  //   return menus;
  //     // .pipe(filter((menus) => menus.day == day))
  //     // .subscribe(Menu);

  // }

  /**
   *  Add a new User to the table
   *  @param menu
   */
  addMenu(menu: Menu): Observable<Menu>
  {
    let url = `http://aston.maquette-potion-mediatique.com/menus`;
    // , {responseType: 'json'}
    return this.http.post<Menu>(url, menu, {responseType: 'json'}).pipe(
        tap((product: Menu) => console.log('menu added')),
        catchError(this.handleError<Menu>('addMenu')),
      );
  }
   //** Read menus by day */

  getMenuByDay(day: string): Observable<Menu[]>{
    return this.http.get<Menu[]>('url/menus/day='+day);
  }

  getMenuByKey(key: string): Observable<Menu[]>{
    return this.http.get<Menu[]>('url/menus/' + key)
    .pipe(
      tap(data => data),
      catchError(this.handleError('getBeerByKey', []))
    );
  }

    /**
   *  // PUT :  Edit a MENU
   *  @param menu
   */

  editMenu(menu: Menu, key: string): Observable<Menu> {
    const url = `url/menus/` + key;
    return this.http.patch<Menu>(url, menu, {responseType: 'json'}).pipe(
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
