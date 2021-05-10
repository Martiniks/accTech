import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { OfficesContainer } from './components/offices/offices.container';
import { AboutComponent } from './components/about/about.component';
import { Offices2Container } from './components/offices2/offices2sm.container';
import { TableSortingExample } from './components/testsort/testsort.component';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'offices' },
  { path: '', component: AboutComponent },
  { path: 'offices', component: OfficesContainer },
  { path: 'offices2', component: Offices2Container },
  { path: 'testsort', component: TableSortingExample },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
