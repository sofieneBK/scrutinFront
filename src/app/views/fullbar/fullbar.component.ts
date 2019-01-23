

import {Component} from '@angular/core';
import {registerPalette , currentPalette} from 'devextreme/viz/palette';
import { VoteStructure, Service } from './fullbar.service';
import { HttpClient } from '@angular/common/http';
import datajs from '../../../assets/data.json';

@Component({
  selector: 'app-fullbar',
  templateUrl: './fullbar.component.html',
  styleUrls: ['./fullbar.component.scss'],
  providers: [Service]
})
export class FullbarComponent  {
  populationData: VoteStructure[];
  constructor(service: Service, private httpService: HttpClient) {
   // this.populationData = <VoteStructure[]> service.getVoteData();
    const servicePortalPalette =  {simpleSet: ['#f3031e', '#ff5a00', '#ffc107', '#80b014', '#4bcb4b', '#359035'],
      indicatingSet: ['#14ba00', '#eeba69', '#a37182'], // for dxCircularGauge and dxLinearGauge
      gradientSet: ['#78b6d9', '#eeba69'] // for dxVectorMap
    };
    registerPalette('servicePortalPalette', servicePortalPalette);
    currentPalette('servicePortalPalette');
this.populationData = datajs;
  }
  customizeTooltip(arg: any) {
    return {
      text: arg.percentText + ' - ' + arg.valueText
    };
  }



}
