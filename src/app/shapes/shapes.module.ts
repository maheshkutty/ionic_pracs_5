import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShapesPageRoutingModule } from './shapes-routing.module';

import { ShapesPage } from './shapes.page';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShapesPageRoutingModule
  ],
  declarations: [ShapesPage],
  providers:[TextToSpeech]
})
export class ShapesPageModule {}
