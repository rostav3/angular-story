import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  CanvasWhiteboardComponent,
  CanvasWhiteboardService,
  CanvasWhiteboardUpdate,
  CanvasWhiteboardOptions,
  CanvasWhiteboardShapeService,
  CircleShape,
  SmileyShape,
  StarShape,
  LineShape,
  RectangleShape,
} from 'ng2-canvas-whiteboard';

@Component({
  selector: 'app-test-packages',
  viewProviders: [CanvasWhiteboardComponent],
  templateUrl: './test-packages.component.html',
  styleUrls: ['./test-packages.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TestPackagesComponent implements OnInit {
  imageBase64!: string;
  // Options for canvas whiteboard
  @ViewChild(CanvasWhiteboardComponent)
  canvasWhiteboardComponent!: CanvasWhiteboardComponent;
  canvasOptions: CanvasWhiteboardOptions = {
    drawButtonEnabled: true,
    drawButtonClass: 'drawButtonClass',
    drawButtonText: 'Draw',
    clearButtonEnabled: true,
    clearButtonClass: 'clearButtonClass',
    clearButtonText: 'Clear',
    undoButtonText: 'Undo',
    undoButtonEnabled: true,
    redoButtonText: 'Redo',
    redoButtonEnabled: false,
    colorPickerEnabled: false,
    fillColorPickerText: 'Fill',
    showFillColorPicker: false,
    showShapeSelector: false,
    strokeColorPickerText: 'Stroke',
    strokeColorPickerEnabled: true,
    saveDataButtonEnabled: true,
    saveDataButtonText: 'Save',
    lineWidth: 5,
    strokeColor: 'rgb(0,0,0)',
    shouldDownloadDrawing: true,
  };
  constructor() {}

  ngOnInit(): void {}
  sendBatchUpdate(e: any): void {}
  onCanvasClear(): void {}
  onCanvasUndo(e: any): void {}
  saveCanvas(e: any): void {
    console.log(e);
  }
  onFileChanged(event: any): void {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imageBase64 = reader.result as string;
    };
  }
}
