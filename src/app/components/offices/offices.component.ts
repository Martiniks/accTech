import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IData } from './offices.container';

@Component({
  selector: 'app-offices-dumb',
  templateUrl: './offices.component.html',
  styleUrls: ['./offices.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OfficesComponent {
  // массив исключений для вывода
  exclude = ['director', 'zamdir', 'glbuh'];
  @Input() data: IData | null = null;
  @Output() submit = new EventEmitter<any>();

  constructor() {
  }

  click(): void {
    this.submit.emit({a: 'A'});
  }

  // функция перевода ключей объекта в массив и фильтрации по массиву исключений
  keys(row: any): string[] {
    return Object.keys(row).filter(key => !this.exclude.includes(key));
  }

  trackByFn(_index: number, result: any): string {
    return result.id;
  }
}
