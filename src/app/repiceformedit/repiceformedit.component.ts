import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Form } from '../form.model';
import { RepicesService } from '../repices.service';


@Component({
  selector: 'app-repiceformedit',
  templateUrl: './repiceformedit.component.html',
  styleUrls: ['./repiceformedit.component.css']
})
export class RepiceformeditComponent  {

  repicesForm:FormGroup;
  index:string;
  constructor(private fb:FormBuilder,private repiceService:RepicesService,private router:Router,private ac:ActivatedRoute) {
    this.ac.params.subscribe((param)=>{
      let newform = this.repiceService.findOne(param.id);
      this.index=param.id;
      this.repicesForm = this.fb.group({
        name:[newform?.name,[Validators.required]],
        image:[newform?.image,[Validators.required]],
        desc:[newform?.desc,[Validators.required]],
        ingredient:this.fb.array([
        ])
      })
    })


  }
  onSubmit(form:Form){
  //  this.repiceService.addRepice(form.value);
   this.router.navigate(['/','repices']);
  }
  addIngredient(){
    (this.repicesForm.get('ingredient') as FormArray).push(new FormGroup({
      foodname :new FormControl('',[Validators.required]),
      quanity: new FormControl(1,[Validators.required])
    }))
  }
  deleteRepices(){
    this.repicesForm.patchValue({name:''});
    this.repicesForm.patchValue({image:''});
    this.repicesForm.patchValue({desc:''});
    (this.repicesForm.get('ingredient') as FormArray).clear();

  }
}
