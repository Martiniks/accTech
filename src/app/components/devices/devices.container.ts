import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { HttpService } from '../../services/http.service';
import { Observable } from 'rxjs';
import { DevicesData } from '../../interfaces';

@Component({
  selector: 'app-devices',
  template: `
    <app-devices-dumb
      [data]="data$ | async"
    ></app-devices-dumb>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DevicesContainer implements OnInit {
  data$: Observable<DevicesData> | undefined;

  constructor(
    private httpService: HttpService,
    ) {
  }

  submit(param: any ):void {
    console.log('>>getTabDevices', param);
    this.data$ = this.httpService.getTabDevices().pipe(tap(val => console.log(val)))
  }

  ngOnInit() {
    this.submit('вызвано из = ngOnInit');
  }

}
