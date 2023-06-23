import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { FormTableComponent } from './form-table/form-table.component';
import { FormEventComponent } from './form-event/form-event.component';

const routes: Routes = [{
  path: "", component: HomeComponent
},{
  path: "product/:indexFromRouting", component: ProductDetailsComponent
},{
  path: "cart", component: CartComponent
},{
  path: "products", component: ProductListComponent
},{
  path: "form-table", component: FormTableComponent
},{
  path: "form-event", component: FormEventComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
