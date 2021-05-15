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
import { Offices2Container } from './components/offices2/offices2.container';
import { TableSortingExample } from './components/testsort/testsort.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { OfficesEditComponent } from './components/offices-edit/offices-edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DevicesContainer } from './components/devices/devices.container';
import { DevicesComponent } from './components/devices/devices.component';


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
    OfficesEditComponent,
    DevicesContainer,
    DevicesComponent,
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
        MatPaginatorModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonToggleModule,
        FormsModule,
        ReactiveFormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
