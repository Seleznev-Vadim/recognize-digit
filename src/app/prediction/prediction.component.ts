import {Component, Input, OnInit} from '@angular/core';
import {Prediction} from '../Prediction';

@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.less']
})
export class PredictionComponent implements OnInit {
  @Input() prediction: Prediction;

  constructor() { }

  ngOnInit() {
  }

}
