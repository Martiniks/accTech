import { AfterViewInit, ChangeDetectionStrategy, Component, Input, ViewChild } from '@angular/core';
import { IData2, OfficesElement } from './offices2.container';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-offices2-dumb',
  templateUrl: './offices2.component.html',
  styleUrls: ['./offices2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Offices2Component implements AfterViewInit {
  dataSource = new MatTableDataSource<OfficesElement>([]);
  displayedColumns: string[] = ['edit', 'id', 'name', 'adres'];
  @ViewChild(MatSort) sort: MatSort | null = null;
  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  constructor() {
  }

  @Input() set data(value: IData2 | null) {
    if (value) {
      this.dataSource.data = value.arrTab;
    }
  };

  ngAfterViewInit() {
    if (!this.dataSource) {
      return;
    }
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
