import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductAddComponent } from './product/product-add.component';


const routes: Routes = [
  {path: 'product' , component: ProductComponent},
  {path: '' , redirectTo: 'product', pathMatch: 'full' },
  {path: 'add', component: ProductAddComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
