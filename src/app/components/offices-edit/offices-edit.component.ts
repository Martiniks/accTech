import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { OfficesElement } from '../offices2/offices2.container';
import { HttpService } from '../../services/http.service';
import { tap } from 'rxjs/operators';

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
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getElement();
  }

  getElement(): void {
    // @ts-ignore
    const id = +this.route.snapshot.paramMap.get('id');
    this.httpService.getElement(id).pipe(tap(val => console.log(val)))
      .subscribe(office => this.office = office);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    // this.heroService.updateHero(this.hero)
    //   .subscribe(() => this.goBack());
  }
}
