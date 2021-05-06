import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotfoundComponent implements OnInit {

  constructor(private router: Router) {
  }

  goHome() {
    this.router.navigate(['']);
  }

  ngOnInit(): void {
  }
 }
