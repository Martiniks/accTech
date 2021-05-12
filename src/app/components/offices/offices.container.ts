import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IData } from 'src/app/interfaces';
import { HttpService } from '../../services/http.service';

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
