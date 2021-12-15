import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlphabetsPageRoutingModule } from './alphabets-routing.module';

import { AlphabetsPage } from './alphabets.page';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlphabetsPageRoutingModule
  ],
  declarations: [AlphabetsPage],
  providers:[TextToSpeech]
})
export class AlphabetsPageModule {}
