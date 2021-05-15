import { AfterViewInit, ChangeDetectionStrategy, Component, Input, ViewChild } from '@angular/core';
import { DevicesData } from '../../interfaces';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-devices-dumb',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class DevicesComponent implements AfterViewInit {
  dataSource = new MatTableDataSource<any>([]);
  displayedColumns: string[] = ['podr_name', 'tip_name', 'model', 'inv_n', 'edit',];
  iDevicesData: DevicesData | null = null;
  @ViewChild(MatSort) sort: MatSort | null = null;
  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  constructor() {
  }
  get data(): DevicesData | null {
    return this.iDevicesData;
  }

  @Input() set data(value: DevicesData | null) {
    if (value) {
      this.dataSource.data = value.arrDevices;
      console.log("set data 1>>",this.dataSource.filteredData);
//      console.log("set _data 2>>",this.dataSource._filterData(['podr_name', 'tip_name', 'model', 'inv_n', ]));
      console.log("set data 4>>",this.dataSource.filter);
    }
    this.iDevicesData = value;
  };

  ngAfterViewInit() {
    if (!this.dataSource) {
      return;
    }
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  // для фильтрации одного столбца
  // On input focus: setup filterPredicate to only filter by input column
  setupFilter(column: string) {
    this.dataSource.filterPredicate = (d: string, filter: string) => {
      // @ts-ignore
      const textToSearch = d[column] && d[column].toLowerCase() || '';
      return textToSearch.indexOf(filter) !== -1;
    };
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log("set data AF-1>>",this.dataSource.filteredData);
  }

}
