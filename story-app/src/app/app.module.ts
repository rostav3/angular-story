import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WhiteboardPageComponent } from './whiteboard-page/whiteboard-page.component';
import { ShapeService } from 'src/services/shape.service';
import { TextNodeService } from 'src/services/text-node.service';

@NgModule({
  declarations: [
    AppComponent,
    WhiteboardPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [
    ShapeService,
    TextNodeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }