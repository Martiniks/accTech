import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IData2 } from './offices2sm.container';

@Component({
  selector: 'app-offices2-dumb',
  templateUrl: './offices2.component.html',
  styleUrls: ['./offices2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Offices2Component  {
  @Input() data: IData2 | null = null;
  // @Output() submit = new EventEmitter<any>();

  displayedColumns: string[] = ['id', 'name', 'adres'];
  constructor() {
  }

 //  Кнопку пока не используем
 // click(): void {
 //    this.submit.emit({a: 'A'});
 // }

}
