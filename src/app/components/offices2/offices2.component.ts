import { ChangeDetectionStrategy, Component } from '@angular/core';
import { tap } from 'rxjs/operators';
import { HttpService } from '../../services/http.service';

export interface PeriodicElement {
  id: string;
  name: string;
  adres: string;
  director?: string;
  glbuh?: string;
  zamdir?: string;
}

const ELEMENT_DATA: PeriodicElement[] = [];

@Component({
  selector: 'app-offices2',
  templateUrl: './offices2.component.html',
  styleUrls: ['./offices2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Offices2Component  {

  displayedColumns: string[] = ['id', 'name', 'adres'];
  dataSource: PeriodicElement[]  = ELEMENT_DATA;
  done =false;

  constructor(private httpService: HttpService) {
    console.log('>>1 constructor');
    this.getTab();
  }

  getTab():void {
    this.httpService.getTab().pipe(tap(val => console.log(val))).subscribe((data: any) => {
      this.dataSource = data.arrTab;
      this.done=true;
    });
      console.log('>>2 gettab');
  }

}
