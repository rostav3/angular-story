import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WhiteboardPageComponent } from './whiteboard-page/whiteboard-page.component';
import { ShapeService } from 'src/services/shape.service';
import { TextNodeService } from 'src/services/text-node.service';
import { StoryColorsComponent } from './whiteboard-page/story-colors/story-colors.component';

@NgModule({
  declarations: [
    AppComponent,
    WhiteboardPageComponent,
    StoryColorsComponent
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