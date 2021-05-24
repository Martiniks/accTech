import { AfterViewInit, ChangeDetectionStrategy, Component, Input, ViewChild } from '@angular/core';
import { DevicesData, DevicesStat, DevicesTip } from '../../interfaces';
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
  displayedColumns: string[] = [
    'podr_name', 'tip_name', 'model', 'inv_n', 'naimen',
    'data_priobr', 'data_vvoda', 'place', 'fio', 'prim', 'status_name', 'edit',
  ];
  iDevicesData: DevicesData | null = null;
  @ViewChild(MatSort) sort: MatSort | null = null;
  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  modelFilter = new FormControl('');
  tipNameFilter = new FormControl('');
  statusFilter = new FormControl('');
  placeFilter = new FormControl('');
  tipNames : DevicesTip[] =[];
  statusName: DevicesStat[] = [];

  filterValues: any = {
    model: '',
    tipName: '',
    status: '',
    place: '',
  }

  constructor() {
  }
  get data(): DevicesData | null {
    return this.iDevicesData;
  }

  @Input() set data(value: DevicesData | null) {
    if (value) {
      this.dataSource.data = value.arrDevices;
      this.statusName = value.arrStat;
      this.tipNames=value.arrTip;
      //.push({id: "0", status_name: "Все"},{id: "99", status_name: "Все кроме списанных"});
      console.log("statusName =2>>",this.statusName);
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
    this.statusFilter.valueChanges
      .subscribe(
        status => {
          this.filterValues.status = status;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
    this.placeFilter.valueChanges
      .subscribe(
        place => {
          this.filterValues.place = place;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
  }

  private createFilter(): (data: any, filter: string) => boolean {
    let filterFunction = function (data:any, filter:string): boolean {
      let searchTerms = JSON.parse(filter);
      return data.model.toLowerCase().indexOf(searchTerms.model.toLowerCase()) !== -1
        && data.tip_name.indexOf(searchTerms.tipName) !== -1
        && data.place.toLowerCase().indexOf(searchTerms.place.toLowerCase()) !== -1
        && data.status_name.indexOf(searchTerms.status) !== -1;
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
