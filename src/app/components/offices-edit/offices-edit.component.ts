import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HttpService } from '../../services/http.service';
import { tap } from 'rxjs/operators';
import { OfficesElement } from 'src/app/interfaces';

@Component({
  selector: 'app-offices-edit',
  templateUrl: './offices-edit.component.html',
  styleUrls: [ './offices-edit.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OfficesEditComponent implements OnInit {
  office: OfficesElement = { "id": "", "name": "", "adres": ""};

  constructor(
    private route: ActivatedRoute,
    private httpService: HttpService,
    private location: Location,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.getElement();
  }

  getElement(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      return;
    }
    this.httpService.getElement(+id).pipe(tap(val => console.log(val)))
      .subscribe(office => {
        this.office = office;
        this.cdr.markForCheck();
      });
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
     this.httpService.updateElement(this.office);
     this.goBack()
     //  .subscribe(() => this.goBack());
  }
}
