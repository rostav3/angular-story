import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ColorService {
  selectedFill!: BehaviorSubject<string>;
  selectedStroke!: BehaviorSubject<string>;
  constructor() {
    this.selectedStroke = new BehaviorSubject('#000000');
    this.selectedFill = new BehaviorSubject('#000000');
  }
}
