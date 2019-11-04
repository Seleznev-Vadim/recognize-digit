import {Component, OnInit} from '@angular/core';
import {Prediction} from './Prediction';

import * as tf from '@tensorflow/tfjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'recognize-digit';
  model: tf.LayersModel;
  predictions: Prediction[] = [];

  ngOnInit(): void {
    this.loadModel();
  }

  async loadModel() {
    this.model = await tf.loadLayersModel('./recognize-digit/assets/model.json');
  }

  onImageUpload(imageUrl: any) {
    const prediction = new Prediction();
    prediction.uploadedImageUrl = imageUrl;
    prediction.prediction = '...';
    this.predictions.unshift(prediction);

    const image = new Image();
    const self = this;
    image.onload = function() {
      self.predict(this, prediction);
    };
    image.src = imageUrl;
  }

  async predict(imageData: any, prediction: Prediction) {
    const pred = await tf.tidy(() => {
      const img = tf.browser.fromPixels(imageData, 1);
      const resizedImg = tf.image.resizeBilinear(img, [28, 28]);
      let img2D = resizedImg.flatten().div(255).floor();
      img2D = tf.cast(img2D, 'float32').as2D(1, 784);

      const output = this.model.predict([img2D]) as any;

      const modelPredictions = Array.from(output.dataSync());
      prediction.prediction = indexOfMax(modelPredictions).toString();
    });

    function indexOfMax(arr) {
      if (arr.length === 0) {
        return -1;
      }

      let max = arr[0];
      let maxIndex = 0;

      for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
          maxIndex = i;
          max = arr[i];
        }
      }

      return maxIndex;
    }
  }
}
