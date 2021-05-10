import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OfficesElement } from '../components/offices2/offices2sm.container';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private officesUrl = 'assets/office.json';  // URL to web api

  constructor(private http: HttpClient) { }

  getTab(): any {
    // return this.http.get('http://10.244.0.236/time2ang.php');
    return this.http.get('assets/offices.json');
  }

  /** GET hero by id. Will 404 if id not found */
  getElement(id: number): Observable<OfficesElement> {
    //const url = `${this.officesUrl}/${id}`;
    const url = `${this.officesUrl}`;
    return this.http.get<OfficesElement>(url).pipe(
      tap(_ => console.log(`fetched hero id=${id}`)),
//      tap(_ => this.log(`fetched hero id=${id}`)),
//      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }


}
