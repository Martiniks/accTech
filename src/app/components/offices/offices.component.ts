import { ChangeDetectionStrategy, Component } from '@angular/core';
import { tap } from 'rxjs/operators';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-offices',
  templateUrl: './offices.component.html',
  styleUrls: ['./offices.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OfficesComponent {
  // implements OnInit
  // массив исключений для вывода
  exclude = ['director', 'zamdir', 'glbuh'];

  arrTab: [];
  time: string;
  model: string;
  done = false;
  data: any = {};

  constructor(private httpService: HttpService) {
  }

  // ngOnInit(): void {
  //      throw new Error('Method not implemented.');
  //  }

  submit(): void {
    this.httpService.getTab().pipe(tap(val => console.log(val))).subscribe((data: any) => {
      this.time = data.time;
      this.model = data.model;
      this.done = true;
      this.arrTab = data.arrTab;
      this.data = data;
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
