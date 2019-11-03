import {Component, Input, OnInit} from '@angular/core';
import {Prediction} from '../Prediction';

@Component({
  selector: 'app-predictions-feed',
  templateUrl: './predictions-feed.component.html',
  styleUrls: ['./predictions-feed.component.less']
})
export class PredictionsFeedComponent implements OnInit {
  @Input() predictions: Prediction[];

  constructor() { }

  ngOnInit() {
  }

}
