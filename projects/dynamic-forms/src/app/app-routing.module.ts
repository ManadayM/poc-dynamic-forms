import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './list/list.component';
import { BuilderComponent } from './builder/builder.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ListComponent },
  { path: 'builder', component: BuilderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
