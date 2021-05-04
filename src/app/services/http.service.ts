import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getTab(): any {
    // return this.http.get('http://10.244.0.236/time2ang.php');
    return this.http.get('assets/offices.json');
  }
}
