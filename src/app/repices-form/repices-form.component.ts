import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Form } from '../form.model';
import { RepicesService } from '../repices.service';

@Component({
  selector: 'app-repices-form',
  templateUrl: './repices-form.component.html',
  styleUrls: ['./repices-form.component.css']
})
export class RepicesFormComponent {
  repicesForm:FormGroup
  constructor(private fb:FormBuilder,private repiceService:RepicesService,private router:Router,private ac:ActivatedRoute) {

    this.repicesForm = this.fb.group({
      name:['',[Validators.required]],
      image:['',[Validators.required]],
      desc:['',[Validators.required]],
      ingredient:this.fb.array([
      ])
    })
  }
  onSubmit(form:Form){
   this.repiceService.addRepice(form);
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
