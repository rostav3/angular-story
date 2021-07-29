import { Component, OnInit, Output } from '@angular/core';
import { ColorService } from 'src/services/color.service';

@Component({
  selector: 'app-story-colors',
  templateUrl: './story-colors.component.html',
  styleUrls: ['./story-colors.component.scss'],
})
export class StoryColorsComponent implements OnInit {
  colorList: any[] = [
    { color: '#FFFFFF', selected: false },
    { color: '#C0C0C0', selected: false },
    { color: '#808080', selected: false },
    { color: '#000000', selected: false },
    { color: '#FF0000', selected: false },
    { color: '#800000', selected: false },
    { color: '#FFFF00', selected: false },
    { color: '#808000', selected: false },
    { color: '#00FF00', selected: false },
    { color: '#008000', selected: false },
    { color: '#00FFFF', selected: false },
    { color: '#008080', selected: false },
    { color: '#0000FF', selected: false },
    { color: '#000080', selected: false },
    { color: '#FF00FF', selected: false },
    { color: '#800080', selected: false },
  ];
  constructor(private colorService: ColorService) {}

  ngOnInit(): void {}
  emitColor(item: any) {
    this.colorService.selectedFill.next(item.color);
    this.colorService.selectedStroke.next(item.color);
    this.colorList.forEach((element) => {
      if (element.color !== item.color) {
        element.selected = false;
      } else {
        element.selected = true;
      }
    });
  }
}
