import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AnspageComponent } from '../anspage/anspage.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  ques = [{
    q:"Identify fruit",
    imgSrc:"https://media.istockphoto.com/photos/red-apple-picture-id184276818?k=20&m=184276818&s=612x612&w=0&h=QxOcueqAUVTdiJ7DVoCu-BkNCIuwliPEgtAQhgvBA_g=",
    ans:"Apple",
    options:["Orange","Apple","Banana","Gauva"],
    id:"q1",
    userAns:""
  },{
    q:"Identify Flag",
    imgSrc:"https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
    ans:"India",
    options:["Ireland","Italy","Netherlands", "India"],
    id:"q2",
    userAns:""
  }, {
    q:"Identify Animal",
    imgSrc:"https://images.news18.com/ibnlive/uploads/2021/07/1627730083_bengal_tiger-1200x800.jpg",
    ans:"Tiger",
    options:["Lion", "Cheetah", "Tiger", "Cat"],
    id:"q3",
    userAns:""
  }, {
    q:"Identify Freedom Fighter",
    imgSrc:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Sardar_patel_%28cropped%29.jpg/220px-Sardar_patel_%28cropped%29.jpg",
    ans:"Sardar Patel",
    options:["Sardar Patel","Mahatama gandhi", "PT. jawaharlal nehru", "Rajendra Prasad"],
    id:"q4",
    userAns:""
  }]

  constructor(private modalController: ModalController) {}

  radioGroupChange(event){
    let idStr = event.target.id;
    let id = parseInt(idStr[1]);
    this.ques[id-1]["userAns"] = event.target.value;
  }

  checkAns(){

  }

  async presentModal() {
    let noQuestion = this.ques.length;
    let score = 0;
    this.ques.forEach(item => {
      if(item.ans == item.userAns && item.userAns != "")
      {
        score = score + 1;
      }
    })
    const modal = await this.modalController.create({
      component: AnspageComponent,
      cssClass: 'my-custom-class',
      swipeToClose: true,
      presentingElement: await this.modalController.getTop(),
      componentProps:{
        score,
        outof:noQuestion        
      }
    });
    return await modal.present();
  }
}
