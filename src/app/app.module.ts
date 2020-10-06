import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepicesComponent } from './repices/repices.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RepicesFormComponent } from './repices-form/repices-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RepiceDetailComponent } from './repice-detail/repice-detail.component';
import { RepiceformeditComponent } from './repiceformedit/repiceformedit.component';

@NgModule({
  declarations: [
    AppComponent,
    RepicesComponent,
    ShoppingListComponent,
    RepicesFormComponent,
    RepiceDetailComponent,
    RepiceformeditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
