import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListContainerComponent } from './list-container/list-container.component';
import { GridContainerComponent } from './grid-container/grid-container.component';

@NgModule({
  declarations: [
    AppComponent,
    ListContainerComponent,
    GridContainerComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
