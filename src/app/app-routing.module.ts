import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrencyFormComponent } from './currency-form/currency-form.component';
import { RequestListComponent } from './request-list/request-list.component';

const routes: Routes = [
  { path: '', component: CurrencyFormComponent },
  { path: 'requests', component: RequestListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
