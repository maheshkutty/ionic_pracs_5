import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-anspage',
  templateUrl: './anspage.component.html',
  styleUrls: ['./anspage.component.scss'],
})
export class AnspageComponent implements OnInit {

  @Input() score: Number;
  @Input() outof: Number;

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
