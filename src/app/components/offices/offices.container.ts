import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpService } from '../../services/http.service';

export interface IData {
  arrTab: any[];
  time: string;
  model: string;
}

@Component({
  selector: 'app-offices',
  template: `
    <app-offices-dumb
      [data]="data$ | async"
      (submit)="submit($event)"
    ></app-offices-dumb>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OfficesContainer {
  data$: Observable<IData> | undefined;

  constructor(
    private httpService: HttpService,
  ) {
  }

  submit(param: any): void {
    console.log('>>', param);

    this.data$ = this.httpService.getTab().pipe(tap(val => console.log(val)));
  }
}
