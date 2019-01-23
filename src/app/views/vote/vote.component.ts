import {Component, ViewChild} from '@angular/core';
@Component({
  selector: 'app-dashboard',
  templateUrl: 'vote.component.html'
})
export class VoteComponent {
  @ViewChild('infoModal') infoModal;
  p1 = 'rejeter';
  p2 = 'rejeter';
  p3 = 'rejeter';
  p4 = 'rejeter';
  p5 = 'rejeter';
  p6 = 'rejeter';
  alertsDismiss: any = [];
  theJSON;
  constructor() { }
  add(): void {
    this.alertsDismiss.push({
      type: 'success',
      msg: `Votre vote a été sauvegarder avec succée `,
      timeout: 4000
    });

  }
  show()
  {
    console.log(this.p1);
    console.log(this.p2);
    console.log(this.p3);
    console.log(this.p4);
    console.log(this.p5);
    console.log(this.p6);
    this.infoModal.hide();
    this.add();
     const theData = {
      P1: this.p1,
      P2 : this.p2,
      P3 : this.p3,
      P4 : this.p4,
      P5 : this.p5,
      P6 : this.p6
    };
    this.theJSON = JSON.stringify(theData);
    this.p1 = 'rejeter';
    this.p2 = 'rejeter';
    this.p3 = 'rejeter';
    this.p4 = 'rejeter';
    this.p5 = 'rejeter';
    this.p6 = 'rejeter';
  }

}
