import { AfterViewInit, ChangeDetectionStrategy, Component, Input, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { IData, OfficesElement } from 'src/app/interfaces';

@Component({
  selector: 'app-offices2-dumb',
  templateUrl: './offices2.component.html',
  styleUrls: ['./offices2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Offices2Component implements AfterViewInit {
  dataSource = new MatTableDataSource<OfficesElement>([]);
  displayedColumns: string[] = ['edit', 'id', 'name', 'adres'];
  iData: IData | null = null;
  @ViewChild(MatSort) sort: MatSort | null = null;
  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  constructor() {
  }

  get data(): IData | null {
    return this.iData;
  }

  @Input() set data(value: IData | null) {
    if (value) {
      this.dataSource.data = value.arrTab;
    }
    this.iData = value;
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
