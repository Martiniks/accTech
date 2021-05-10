import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { IData2, OfficesElement } from './offices2sm.container';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-offices2-dumb',
  templateUrl: './offices2.component.html',
  styleUrls: ['./offices2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Offices2Component  {
  @Input() data: IData2 | null = null;
  @Output() submit = new EventEmitter<any>();
  dataSource = new MatTableDataSource<OfficesElement>([]);

  displayedColumns: string[] = ['edit', 'id', 'name', 'adres'];
  constructor() {
   }
  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;
  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

 click(): void {
    //this.submit.emit({a: 'A'});
   if (this.data) {
     this.dataSource.data = this.data.arrTab;
   }
   console.log('>>из клика dataSource.data==', this.dataSource.data );
 }

}
