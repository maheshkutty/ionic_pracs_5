import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.page.html',
  styleUrls: ['./numbers.page.scss'],
})
export class NumbersPage implements OnInit {

  type: String;
  data = [{"src":"1","text":"one"},{"src":"2","text":"two"},{"src":"3","text":"four"},{"src":"4","text":"four"},{"src":"5","text":"five"},{"src":"6","text":"Six"},{"src":"7","text":"seven"}]

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
