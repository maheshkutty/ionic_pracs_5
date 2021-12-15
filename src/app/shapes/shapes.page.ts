import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-shapes',
  templateUrl: './shapes.page.html',
  styleUrls: ['./shapes.page.scss'],
})
export class ShapesPage implements OnInit {

  type: String;
  data = [{ "src": "https://upload.wikimedia.org/wikipedia/commons/8/8e/Pan_Blue_Circle.png", "text": "Circle" }]

  constructor(private tts: TextToSpeech) { }

  ngOnInit() {
    this.type = 'Pronouce'
  }

  speakText(text) {
    this.tts.speak(text)
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
  segmentChanged(ev: any) {
    //this.type = newtype;
  }
}
