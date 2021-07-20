import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { CanvasWhiteboardModule } from 'ng2-canvas-whiteboard';
import { TestPackagesComponent } from './modules/test-packages/test-packages.component';

@NgModule({
  declarations: [AppComponent, TestPackagesComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    CanvasWhiteboardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
