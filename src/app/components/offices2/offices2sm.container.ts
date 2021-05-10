import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { HttpService } from '../../services/http.service';
import { Observable } from 'rxjs';

export interface IData2 {
  arrTab: PeriodicElement[];
  time: string;
  model: string;
}


export interface PeriodicElement {
  id: string;
  name: string;
  adres: string;
  director?: string;
  glbuh?: string;
  zamdir?: string;
}

@Component({
  selector: 'app-offices2',
  template: `
    <app-offices2-dumb
      [data]="data$ | async"
      (submit)="submit($event)"
    >... идет загрузка</app-offices2-dumb>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Offices2Container implements OnInit {
  data$: Observable<IData2> | undefined;

  constructor(
    private httpService: HttpService,
    ) {
  }

  submit(param: any ):void {
    console.log('>>getTab', param);
    this.data$ = this.httpService.getTab().pipe(tap(val => console.log(val)))
  }

  ngOnInit() {
  //  this.submit('вызвано из = ngOnInit');
  }

}
