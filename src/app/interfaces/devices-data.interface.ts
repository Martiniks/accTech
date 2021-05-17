import { OfficesElement } from ".";

export interface DevicesData {
  arrPod: OfficesElement[];
  arrTip: DevicesTip[];
  arrStat: DevicesStat[];
  arrDevices: DevicesElement[];
}

export interface DevicesElement {
  id:string;
  podr_name: string;
  tip_name: string;
  model: string;
  inv_n: string;
  naimen: string;
  ser_nomer1: string;
  ser_nomer2: string;
  data_priobr: string;
  data_vvoda: string;
  place: string;
  fio: string;
  prim: string;
  status_name: string;
}

export interface DevicesTip {
  id:string;
  name: string;
  prim?: string;
}

export interface DevicesStat {
  id:string;
  status_name: string;
}
