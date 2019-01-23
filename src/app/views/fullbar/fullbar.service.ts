import { Injectable } from '@angular/core';
export class VoteStructure {
  nom: string;
  rejter: number;
  insuffisant: number;
  passable: number;
  assezBien: number;
  bien: number;
  tresBien: number;
}
@Injectable()
export class Service {
  constructor() {
  }

}

