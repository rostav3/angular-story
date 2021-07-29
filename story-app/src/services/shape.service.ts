import { Injectable } from '@angular/core';
import Konva from 'konva';
import { ColorService } from './color.service';
@Injectable({
  providedIn: 'root',
})
export class ShapeService {
  selectedFill: string = '#000000';
  selectedStroke: string = '#000000';
  constructor(private colorService: ColorService) {
    this.subscribeToColors();
  }
  subscribeToColors(): void {
    this.colorService.selectedFill.subscribe((fill) => {
      this.selectedFill = fill;
    });
    this.colorService.selectedStroke.subscribe((stroke) => {
      this.selectedStroke = stroke;
    });
  }
  circle() {
    return new Konva.Circle({
      x: 100,
      y: 100,
      radius: 70,
      fill: this.selectedFill,
      stroke: this.selectedStroke,
      strokeWidth: 4,
      draggable: true,
    });
  }
  line(pos: any, mode: string = 'brush') {
    return new Konva.Line({
      stroke: this.selectedStroke,
      strokeWidth: 5,
      globalCompositeOperation:
        mode === 'brush' ? 'source-over' : 'destination-out',
      points: [pos.x, pos.y],
      draggable: mode == 'brush',
    });
  }
  rectangle() {
    return new Konva.Rect({
      x: 20,
      y: 20,
      width: 100,
      height: 50,
      fill: this.selectedFill,
      stroke: this.selectedStroke,
      strokeWidth: 4,
      draggable: true,
    });
  }
}
