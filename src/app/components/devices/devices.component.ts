import { AfterViewInit, ChangeDetectionStrategy, Component, Input, ViewChild } from '@angular/core';
import { DevicesData } from '../../interfaces';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { FormControl } from '@angular/forms';


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

  modelFilter = new FormControl('');
  tipNameFilter = new FormControl('');

  filterValues: any = {
    model: '',
    tipName: ''
  }

  constructor() {
  }
  get data(): DevicesData | null {
    return this.iDevicesData;
  }

  @Input() set data(value: DevicesData | null) {
    if (value) {
      this.dataSource.data = value.arrDevices;
      console.log("dataSource.filter =2>>",this.dataSource.filter);
    }
    this.iDevicesData = value;
  };

  ngAfterViewInit() {
    if (!this.dataSource) {
      return;
    }
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.fieldListener();
    this.dataSource.filterPredicate = this.createFilter();
    console.log("dataSource.filterPredicate =1>>",this.dataSource.filterPredicate);

  }

  private fieldListener() {
    this.modelFilter.valueChanges
      .subscribe(
        model => {
          this.filterValues.model = model;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
    this.tipNameFilter.valueChanges
      .subscribe(
        tipName => {
          this.filterValues.tipName = tipName;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
  }

  private createFilter(): (data: any, filter: string) => boolean {
    let filterFunction = function (data:any, filter:string): boolean {
      let searchTerms = JSON.parse(filter);
      return data.model.indexOf(searchTerms.model) !== -1
        && data.tip_name.indexOf(searchTerms.tipName) !== -1;
    }
    return filterFunction;
  }


  // для фильтрации одного столбца
  // On input focus: setup filterPredicate to only filter by input column
/*  setupFilter(column: string) {
    this.dataSource.filterPredicate = (d: string, filter: string) => {
      // @ts-ignore
      const textToSearch = d[column] && d[column].toLowerCase() || '';
      return textToSearch.indexOf(filter) !== -1;
    };
  }*/

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log("dataSource.filter =>>",this.dataSource.filter);
  }

}
