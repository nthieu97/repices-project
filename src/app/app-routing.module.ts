import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepiceDetailComponent } from './repice-detail/repice-detail.component';
import { RepiceformeditComponent } from './repiceformedit/repiceformedit.component';
import { RepicesFormComponent } from './repices-form/repices-form.component';
import { RepicesComponent } from './repices/repices.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [
  {path:'repices',component:RepicesComponent,
    children:[
      {path:'new',component:RepicesFormComponent},
      {path:'detail/:id',component:RepiceDetailComponent},
      {path:'edit/:id',component:RepiceformeditComponent}
    ]},
  {path:'shopping-list',component:ShoppingListComponent},
  {path:'**',redirectTo:'repices'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
