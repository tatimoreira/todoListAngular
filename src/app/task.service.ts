import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from './task';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Http } from '@angular/http';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasksUrl = '/tasks';  // URL to web api

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.tasksUrl)
  }

  addTask (task: Task): Observable<Task>{
    return this.http.post<Task>(this.tasksUrl, task, httpOptions).pipe(
      catchError(this.handleError<Task>('addTask'))
    )
  }

  deleteTask(taskId:number): Observable<Task>{
    return this.http.delete<Task>(this.tasksUrl + "/"+ taskId, httpOptions).pipe(
      catchError(this.handleError<Task>('deleteTask'))
    )
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

 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
