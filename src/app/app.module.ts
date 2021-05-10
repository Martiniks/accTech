import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { OfficesComponent } from './components/offices/offices.component';
import { AppRoutingModule } from './app-routing.module';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { OfficesContainer } from './components/offices/offices.container';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { AboutComponent } from './components/about/about.component';
import { Offices2Component } from './components/offices2/offices2.component';
import { Offices2Container } from './components/offices2/offices2sm.container';
import { TableSortingExample } from './components/testsort/testsort.component';


@NgModule({
  declarations: [
    AppComponent,
    OfficesComponent,
    OfficesContainer,
    NotfoundComponent,
    AboutComponent,
    Offices2Component,
    Offices2Container,
    TableSortingExample,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatTableModule,
    MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
