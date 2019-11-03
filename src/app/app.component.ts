import { Component } from '@angular/core';
import {Prediction} from './Prediction';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'recognize-digit';
  predictions: Prediction[] = [];

  onImageUpload(imageUrl: any) {
    const prediction = new Prediction();
    prediction.uploadedImageUrl = imageUrl;
    prediction.prediction = '1';
    this.predictions.unshift(prediction);
  }
}
