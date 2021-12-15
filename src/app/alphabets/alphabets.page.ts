import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-alphabets',
  templateUrl: './alphabets.page.html',
  styleUrls: ['./alphabets.page.scss'],
})
export class AlphabetsPage implements OnInit {

  type: String;
  data = [{ "src": "https://media.istockphoto.com/photos/red-apple-picture-id184276818?k=20&m=184276818&s=612x612&w=0&h=QxOcueqAUVTdiJ7DVoCu-BkNCIuwliPEgtAQhgvBA_g=", "text": "Apple" }, { "src": "https://media.istockphoto.com/photos/orange-picture-id185284489?k=20&m=185284489&s=612x612&w=0&h=LLY2os0YTG2uAzpBKpQZOAC4DGiXBt1jJrltErTJTKI=", "text": "Orange" }, { "src": "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGluZWFwcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80", "text": "Pineapple" }, { "src": "https://images.unsplash.com/photo-1587132137056-bfbf0166836e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFuYW5hfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80", "text": "Banana" }]

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
