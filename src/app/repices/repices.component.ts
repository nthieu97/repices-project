import { Component,  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RepicesService } from '../repices.service';

@Component({
  selector: 'app-repices',
  templateUrl: './repices.component.html',
  styleUrls: ['./repices.component.css']
})
export class RepicesComponent  {
  repices;
  constructor(private repiceService:RepicesService,private router:Router) {
    this.repices=this.repiceService.repice;


  }
  handleClick(i){
    this.router.navigate(['/','repices','detail',i]);
  }



}
