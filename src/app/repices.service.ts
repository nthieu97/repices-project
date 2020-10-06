import { Injectable } from '@angular/core';
import { element } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class RepicesService {
  repice:any[]=[

  ];
  constructor() { }
  addRepice(value :object){
    this.repice.push(value);
  }
  findOne(value:string){
    return this.repice[Number(value)]
  }
  deleteOne(value:string){
    this.repice.splice(Number(value),1);
  }
}
