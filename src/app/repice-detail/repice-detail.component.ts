import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RepicesService } from '../repices.service';

@Component({
  selector: 'app-repice-detail',
  templateUrl: './repice-detail.component.html',
  styleUrls: ['./repice-detail.component.css']
})
export class RepiceDetailComponent  {
  detailRepice;
  index:string;
  show:boolean=false;
  constructor(private repices:RepicesService,private ac:ActivatedRoute,private router:Router) {
    this.ac.params.subscribe((param)=>{
      this.detailRepice=this.repices.findOne(param.id);
      this.index=param.id;
    })
  }
  showDropdown(){
    this.show=!this.show;
  }
  handleDelete(index:string){
    this.repices.deleteOne(index);
    this.router.navigate(['/','repices']);
  }
  handleEdit(index:string){
    this.router.navigate(['/','repices','edit',index])
  }
}
