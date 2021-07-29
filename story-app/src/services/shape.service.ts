import { Injectable } from '@angular/core';
import Konva from 'konva';
import { Observable } from 'rxjs';
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
  imageRectangle(image: any): Observable<any> {
    let URL = window.webkitURL || window.URL;
    let url = URL.createObjectURL(image);
    let img = new Image();
    img.src = url;
    return new Observable((observer) => {
      img.onload = function () {
        let width = window.innerWidth * 0.9;
        let height = window.innerHeight * 0.8;

        // now load the Konva image
        let theImg = new Konva.Image({
          image: img,
          width: width,
          height: height,
          draggable: false,
        });
        observer.next(theImg);
      };
    });
  }
}
