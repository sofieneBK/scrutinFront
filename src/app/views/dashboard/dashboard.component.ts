import { Component, OnInit } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import resdata from '../../../assets/res.json';
import {Service} from '../fullbar/fullbar.service';
@Component({
  templateUrl: 'dashboard.component.html',
  providers: [Service]
})


export class DashboardComponent implements OnInit {
  res;
  pRej;
  pInssuf;
  pPass;
  pAssez;
  pBien;
  pTb;
  ngOnInit(): void {
    this.res = resdata[0];
    this.pRej = this.res.rejter * 100 / this.res.total_vote;
    this.pInssuf = this.res.insuffisant * 100 / this.res.total_vote;
    this.pPass  =  this.res.passable * 100 / this.res.total_vote;
    this.pAssez = this.res.assezBien  * 100 / this.res.total_vote;
    this.pBien = this.res.bien  * 100 / this.res.total_vote;
    this.pTb = this.res.tresBien * 100 / this.res.total_vote;
  }
}
