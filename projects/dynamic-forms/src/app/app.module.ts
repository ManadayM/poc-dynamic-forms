import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormioModule } from 'angular-formio';
import {
  NbButtonModule,
  NbCardModule,
  NbLayoutModule,
  NbStepperModule,
  NbThemeModule
} from '@nebular/theme';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuilderComponent } from './builder/builder.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    BuilderComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FormioModule,
    NbThemeModule.forRoot(),
    NbLayoutModule,
    NbCardModule,
    NbButtonModule,
    NbStepperModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
