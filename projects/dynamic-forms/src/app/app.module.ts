import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormioModule } from 'angular-formio';
import {
  NbButtonModule,
  NbCardModule,
  NbGlobalPhysicalPosition,
  NbGlobalPositionStrategy,
  NbLayoutModule,
  NbStepperModule,
  NbThemeModule,
  NbToastrModule
} from '@nebular/theme';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuilderComponent } from './builder/builder.component';
import { ListComponent } from './list/list.component';
import { FormViewerComponent } from './form-viewer/form-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    BuilderComponent,
    ListComponent,
    FormViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FormioModule,
    NbThemeModule.forRoot(),
    NbToastrModule.forRoot({ destroyByClick: true, duration: 5000, position: NbGlobalPhysicalPosition.BOTTOM_RIGHT }),
    NbLayoutModule,
    NbCardModule,
    NbButtonModule,
    NbStepperModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
