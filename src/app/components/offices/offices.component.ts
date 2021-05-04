import { Component, OnInit } from '@angular/core';
import {tap} from 'rxjs/operators';
import {HttpService} from '../../services/http.service';

@Component({
  selector: 'app-offices',
  templateUrl: './offices.component.html',
  styleUrls: ['./offices.component.scss']
})
export class OfficesComponent implements OnInit {
  // массив исключений для вывода
  exclude = ['director', 'zamdir', 'glbuh'];

  arrTab: [];
  time: string;
  model: string;
  done: boolean = false;

  constructor(private httpService: HttpService) {
  }

  submit() {
    this.httpService.getSum().pipe(tap(val => console.log(val))).subscribe((data: any) => {
      this.time = data.time;
      this.model = data.model;
      this.done = true;
      this.arrTab = data.arrTab;
    });
  }

  // функция перевода ключей объекта в массив и фильтрации по массиву исключений
  keys(row: any): string[] {
    return Object.keys(row).filter(key => !this.exclude.includes(key));
  }

  trackByFn(index: number, result: any): string {
    return result.id;
  }
}
