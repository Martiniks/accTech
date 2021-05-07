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

const ELEMENT_DATA: PeriodicElement[] = [
  { "id": "400", "name": "Филиал Белгосстраха по Гродненской области", "adres": "230012, г. Гродно, ул. Доватора, 2/2", "director": "", "zamdir": "", "glbuh": "" },
  { "id": "401", "name": " Представительство по г.Гродно", "adres": "230012, г. Гродно, ул. Доватора, 2/2", "director": "", "zamdir": "", "glbuh": "" },
  { "id": "403", "name": " Представительство по Волковыскому району", "adres": "231900, г. Волковыск, ул. Медведева, 3", "director": "", "zamdir": "", "glbuh": "" },
  { "id": "404", "name": " Представительство по Вороновскому району", "adres": "231391, г.п. Вороново, ул. Калинина, 4/а", "director": "", "zamdir": "", "glbuh": "" },
  { "id": "405", "name": " Представительство по Гродненскому району", "adres": "230025, г. Гродно, пр. Космонавтов, 37а", "director": "", "zamdir": "", "glbuh": "" },
  { "id": "406", "name": " Представительство по Дятловскому району", "adres": "231471, г. Дятлово, ул. Первомайская, 1", "director": "", "zamdir": "", "glbuh": "" },
];

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
