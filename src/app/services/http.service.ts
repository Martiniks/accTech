import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  getSum(){
    return this.http.get('http://10.244.0.236/time2ang.php');
  }
}
