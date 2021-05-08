import { ChangeDetectionStrategy, Component } from '@angular/core';
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
      (submit)="getTab($event)"
    ></app-offices2-dumb>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Offices2Container  {
  data$: Observable<IData2> | undefined;

  constructor(
    private httpService: HttpService,
    ) {
  }

  getTab(param: any ):void {
    console.log('>> param', param);
    this.data$ = this.httpService.getTab().pipe(tap(val => console.log(val)))
    console.log('>>getTab');
  }

}
