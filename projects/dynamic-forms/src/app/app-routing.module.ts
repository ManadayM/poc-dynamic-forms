import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './list/list.component';
import { BuilderComponent } from './builder/builder.component';
import { FormViewerComponent } from './form-viewer/form-viewer.component';

const routes: Routes = [
  { path: 'builder', component: BuilderComponent },
  { path: 'form/:id', component: FormViewerComponent },
  { path: '', pathMatch: 'full', component: ListComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
